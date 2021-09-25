from flask import Flask, request
from flask_cors import CORS

events = {
        0 : {
            "name" : "event1",
            "category" : "food", 
            "location" : "alma",
            "date" : "UTC ",
        }, 
        1 : {
            "name" : "event2",
            "category" : "food", 
            "date" : "UTC ",
            "location" : "alma",
        },
        2 : {
            "name" : "event3",
            "category" : "food",
            "location" : "alma", 
            "date" : "UTC ",
        }}

app = Flask(__name__)
CORS(app)

@app.get("/")
def get_default():
    return {"message": "Welcome to OSAI"}

@app.get("/all")
def get_all():
    return events

@app.get("/event/<event_id>")
def get_event(event_id: int):
    return events[int(event_id)]

@app.post("/event")
def new():
    uid = max(events.keys()) + 1
    events[uid] = request.json
    return str(uid)

@app.delete("/event/<event_id>")
def delete(event_id: int):  # no error handling
    del events[int(event_id)]
    return "Deletion successful"

if __name__ == '__main__':
    app.run()
