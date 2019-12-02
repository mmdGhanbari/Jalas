from flask import Flask, request
from db import insertPoll, getPoll, getUserPolls, getAll
app = Flask(__name__)


@app.route('/api/getAllPolls')
def getAllPolls():
    polls = str(getAll())
    return polls


@app.route('/api/getPoll/<name>')
def getPollRouter(name):
    return str(getPoll(name))


# @app.route('/api/getUserPolls/<userId>')
# def getUserPollsRouter(userId):
#     print(getUserPolls(userId))
#     return 'helloooo'


@app.route('/api/insertPoll', methods=['POST'])
def insertPollRouter():
    poll = request.json
    insertPoll(poll)
    return 'seccess'
