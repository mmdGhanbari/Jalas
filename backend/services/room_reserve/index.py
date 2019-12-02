from flask import Flask
import pymongo
import requests
from requests.exceptions import Timeout
import urllib.request
from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.retry import Retry

app = Flask(__name__)


def requests_retry_session(
    retries=10,
    backoff_factor=0.3,
    status_forcelist=(500, 502, 504, 408),
    session=None,
):
    session = session or requests.Session()
    retry = Retry(
        total=retries,
        read=retries,
        connect=retries,
        backoff_factor=backoff_factor,
        status_forcelist=status_forcelist,
    )
    adapter = HTTPAdapter(max_retries=retry)
    session.mount('http://', adapter)
    session.mount('https://', adapter)
    return session

@app.route('/api/getAvailableRooms/<start>/<end>')
def roomList(start, end):
    try:
        req_url = 'http://213.233.176.40/available_rooms?start=start&end=end'
        available_rooms = requests.get(req_url, timeout=5).content
        return available_rooms
    except Timeout as ex:
        return "Available List Timeout", 408
    
@app.route('/api/ReserveRoom/<roomNum>/<start>/<end>')
def reserveRoom(roomNum, start, end):
    userId = "PiedPipers"
    reserveUrl = 'http://213.233.176.40/rooms/room_num/reserve'
    data = {
        "username" : userId,
        "start" : start,
        "end" : end
    }
    
    t0 = time.time()
    try:
        response = requests_retry_session().post(reserveUrl, data=data)
    except Exception as ex:
        print('It failed :(', ex.__class__.__name__)
    else:
        print('It eventually worked', response.status_code)
    finally:
        t1 = time.time()
        print('Took', t1 - t0, 'seconds')


    