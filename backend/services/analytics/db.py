import pymongo
import json
from pymongo import MongoClient


client = MongoClient('127.0.0.1', 27017)
db = client['jalas']

def insertMeeting(meeting):
    db.analytics.insert_one(meeting)

def updateMeeting(userId, start, now):
    db.analytics.update(
        {userId : userId},
        {
            set:{
                start : now
                }
        }
    )

