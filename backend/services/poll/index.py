import json
from bson import json_util
from flask import Flask, request, jsonify
from db import insertPoll, getPoll, getUserPolls, getAll
app = Flask(__name__)


@app.route('/api/getAllPolls')
def getAllPolls():
    polls = getAll()
    return json.dumps(polls, default=json_util.default)


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
    return 'success'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3002)
