import pymongo
from pymongo import MongoClient


client = MongoClient('127.0.0.1', 27017)
db = client['jalas']


def insertPoll(poll):
    db.poll.insert_one(poll)


def updatePoll(poll):
    db.poll.update_one({"_id": poll["_id"]}, {"$set": poll})


def getAll():
    cursor = db.poll.find({"deleted": {"$exists": False}})
    return [x for x in cursor]


def getPoll(name):
    cursor = db.poll.find_one({"name": name, "deleted": {"$exists": False}})
    for x in cursor:
        return x
    return


def getUserPolls(userId):
    cursor = db.poll.find({'userId': userId, "deleted": {"$exists": False}})
    print(x for x in cursor)
    return [x for x in cursor]
