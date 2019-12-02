import pymongo
import json
from pymongo import MongoClient


client = MongoClient('127.0.0.1', 27017)
db = client['jalas']


def insertPoll(poll):
    db.poll.insert_one(poll)


def getPoll(userId, name):
    cursor = db.poll.find({'userId': userId})
    for x in cursor:
        if x['name'] == name:
            print("------------", x)
            return x
    print("cursor:::: ", (x for x in cursor))
    return x


def getUserPolls(userId):
    cursor = db.poll.find({'userId': userId})
    # print("cursor ", cursor)
    # data = jsonify(cursor)
    # print("data", data)
    print(x for x in cursor)
    return [x for x in cursor]
