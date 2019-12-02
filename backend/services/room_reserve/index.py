from flask import Flask
import pymongo
import requests
import urllib.request

app = Flask(__name__)

@app.route('/api/available_rooms/<start>/<end>')
def roomList(start, end):
    req_url = 'http://213.233.176.40/available_rooms?start=start&end=end'
    available_rooms = requests.get(req_url).content
    return available_rooms
    
@app.route('/api/reserve_rooms/<userId>/<room_num>/<start>/<end>')
def reserveRoom(userId, room_num, start, end):
    reserve_url = 'http://213.233.176.40/rooms/room_num/reserve'
    data = {
        "username" : userId,
        "start" : start,
        "end" : end
    }
    response = requests.post(reserve_url, data=data)
    
    if(response.status_code != 200):
        print("Error!!!")
        # Exception
    else:
        print("OK!")
        # send reserved event to analytics
    return response
    