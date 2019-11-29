from flask import Flask
from db import insertPoll, getPolls
app = Flask(__name__)


@app.route('/api/getPolls')
def getPollsRouter():
    return str(getPolls())


@app.route('/api/getUserPolls/<userId>')
def getUserPollsRouter(userId):
    return 'helloooo'


@app.route('/api/insertPoll/<name>')
def insertPollRouter(name):
    insertPoll({
        'name': name
    })
    return 'seccess'
