from flask import Flask
from db import insertMeeting, updateMeeting
from datetime import datetime
app = Flask(__name__)

@app.route('/api/getPoll/<userId>/<name>')
def meetingStart(userId, name):
    insertMeeting({
        'name': name,
        'userId': userId,
        'option': [
            {'start': ''},
            {'end': ''},
        ]
    })
    now = datetime.now()
    updateMeeting(userId, 'start', now)


    
