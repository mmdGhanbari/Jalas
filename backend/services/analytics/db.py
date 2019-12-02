import pymongo
import json
from pymongo import MongoClient


client = MongoClient('127.0.0.1', 27017)
db = client['jalas']


def insertEvent(event):
    db.analytics.insert_one(event)


def getAll():
    cursor = db.analytics.find()
    for x in cursor:
        print("------------", x)
    return


def reserveNumber():
    rooms = []
    cursor = db.analytics.find()
    for x in cursor:
        if x['type'] == 'RESERVE_ROOM':
            if x['data'] not in rooms:
                rooms.append(x['data'])
    return len(rooms)


def unsuccessMeeting():
    counter = 0
    cursor = db.analytics.find()
    for x in cursor:
        if x['type'] == 'MODIFY_MEETING' or x['type'] == 'CANCEL_MEETING':
            counter += 1
    return counter
