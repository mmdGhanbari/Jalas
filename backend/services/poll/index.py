import json
from bson import json_util, ObjectId
from flask import Flask, request, jsonify
from db import insertPoll, updatePoll, getPoll, getUserPolls, getAll
app = Flask(__name__)


def serializePoll(poll):
    id = poll['_id']
    poll['_id'] = str(id)
    return poll


@app.route('/api/getAllPolls')
def getAllPolls():
    polls = getAll()
    return json.dumps([serializePoll(x) for x in polls], default=json_util.default)


@app.route('/api/getPoll/<name>')
def getPollRouter(name):
    return json.dumps(getPoll(name), default=json_util.default)


# @app.route('/api/getUserPolls/<userId>')
# def getUserPollsRouter(userId):
#     print(getUserPolls(userId))
#     return 'helloooo'


@app.route('/api/insertPoll', methods=['POST'])
def insertPollRouter():
    poll = request.json
    insertPoll(poll)
    return 'success'


@app.route('/api/updatePoll', methods=['POST'])
def updatePollRouter():
    poll = request.json
    poll["_id"] = ObjectId(poll["_id"])
    print(poll)
    updatePoll(poll)
    return 'success'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3002)
