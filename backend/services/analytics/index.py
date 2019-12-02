from flask import Flask, request
from db import insertEvent, getAll, reserveNumber, unsuccessMeeting
from datetime import datetime

app = Flask(__name__)


@app.route('/api/insertEvent', methods=['POST'])
def insertEventRouter():
    event = request.json
    insertEvent(event)
    return


@app.route('/api/getAllEvent', methods=['GET'])
def getAllEventRouter():
    return str(getAll())


@app.route('/api/getReserveNumber', methods=['GET'])
def getReserveNum():
    return str(reserveNumber())


@app.route('/api/unsuccessMeeting', methods=['GET'])
def getUnsuccessMeeting():
    return str(unsuccessMeeting())


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3005)
