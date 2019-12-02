from flask import Flask
from db import insertMeeting, updateMeeting
from datetime import datetime
app = Flask(__name__)

@app.route('/api/insertEvent')
def insertEvent():
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

@app.route('api/')

    
