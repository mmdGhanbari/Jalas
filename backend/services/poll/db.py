import pymongo
from pymongo import MongoClient

client = MongoClient('127.0.0.1', 27017)
db = client['jalas']


def insertPoll(poll):
    db.poll.insert_one(poll)


def getPolls():
    cursor = db.poll.find()
    return [x for x in cursor]
