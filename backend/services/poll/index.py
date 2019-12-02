from flask import Flask
from db import insertPoll, getPoll, getUserPolls
app = Flask(__name__)


@app.route('/api/getPoll/<userId>/<name>')
def getPollRouter(userId, name):
    return str(getPoll(userId, name))


@app.route('/api/getUserPolls/<userId>')
def getUserPollsRouter(userId):
    print(getUserPolls(userId))
    return 'helloooo'


@app.route('/api/insertPoll/<name>/<userId>/<sdate1>/<edate1>/<positive1>/<negative1>/<sdate2>/<edate2>/<positive2>/<negative2>/<sdate3>/<edate3>/<positive3>/<negative3>')
def insertPollRouter(name, userId, sdate1, edate1, positive1, negative1,
                                    sdate2, edate2, positive2, negative2,
                                    sdate3, edate3, positive3, negative3):
    insertPoll({
        'name': name,
        'userId': userId,
        'option': [
            {'start': sdate1,
            'end': edate1,
            'positive': positive1,
            'negative': negative1
            },
            {'start': sdate2,
            'end': edate2,
            'positive': positive2,
            'negative': negative2
            },
            {'start': sdate3,
            'end': edate3,
            'positive': positive3,
            'negative': negative3
            },
        ]
    })
    return 'seccess'
