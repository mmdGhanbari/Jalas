from flask import Flask, request
from flask_mail import Mail, Message
import pymongo

app = Flask(__name__)
mail = Mail(app)


app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'eileen.jamali@gmail.com'
app.config['MAIL_PASSWORD'] = 'aylin1farzanegan'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
mail = Mail(app)


@app.route("/api/reserveComplete", methods=['POST'])
def sendEmail():
    data = request.json
    msg = Message('Hello', sender='fatemeh.haghighi550@gmail.com',
                  recipients=['fatemeh.haghighi550@gmail.com'])
    msg.body = data['message']
    mail.send(msg)
    return "Sent"


# def getEmail(userId):
#     return "eileen.jamali@gmail.com"

# def getMeetingDetail(userId, meetingName):
#     meeting = {}
#     #query to db
#     sdate = "2019-09-13T19:00:00"
#     edate = "2019-09-13T20:00:00"
#     room = "800"
#     pos = 8
#     neg = 3

#     meeting["creator"] = userId
#     meeting["name"] = meetingName
#     meeting["sdate"] = sdate
#     meeting["edate"] = edate
#     meeting["room"] = room
#     meeting["positive"] = str(pos)
#     meeting["negative"] = str(neg)

#     return meeting


# @app.route('/api/email/<userId>/<meetingName>')
# def sendEmail(userId, meetingName):
#     to = getEmail(userId)
#     meetingDetail = getMeetingDetail(userId, meetingName)
#     # msg = "You set a meeting sucessfully.\n" + \
#     #     "Details:\n" + \
#     #         "\tCreator: " + userId + \
#     #         "\tName: " + meetingName + \
#     #         "\tFrom: " + meetingDetail["sdate"] + \
#     #         "\tTo: " + meetingDetail["edate"] + \
#     #         "\tAt: " + meetingDetail["room"] + \
#     #         "\tPositive: " + meetingDetail["positive"] + \
#     #         "\tNegative: " + meetingDetail["negative"] + \
#     #         "\tInvidet People: "
#     msg = Message("text msg", sender='eileen.jamali@gmail.com', recipients=[to])
#     msg.body = "test msg content"
#     mail.send(msg)
#     return "done!"


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3003)
