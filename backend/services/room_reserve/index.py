from flask import Flask, request
import pymongo
import requests
from requests.exceptions import Timeout
import urllib.request
from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.retry import Retry
import json

app = Flask(__name__)


def requests_retry_session(
    retries=10,
    backoff_factor=0.3,
    status_forcelist=(500, 502, 504, 408, 400, 404),
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


@app.route('/api/getAvailableRooms/<start>/<end>', methods=['GET'])
def roomList(start, end):
    try:
        req_url = 'http://213.233.176.40/available_rooms?start=' + start + '&end=' + end
        response = requests.get(req_url, timeout=5)
        return response.content, response.status_code
    except Timeout:
        return "Available List Timeout", 408


@app.route('/api/reserveRoom', methods=['POST'])
def reserveRoom():
    body = request.json
    userId = "PiedPipers"

    reserveUrl = 'http://213.233.176.40/rooms/' + \
        str(body['roomNumber']) + '/reserve'
    data = {
        "username": userId,
        "start": body['start'],
        "end": body['end']
    }

    headers = {'Content-Type': 'application/json'}

    try:
        response = requests_retry_session().post(reserveUrl, data=json.dumps(data), headers=headers)
        return response.content, response.status_code
    except Exception as ex:
        print('It failed :(', ex.__class__.__name__)
    else:
        print('It eventually worked', response.status_code)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3004)
