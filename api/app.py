from flask import Flask, request
from flask_cors import CORS

events = {
        0 : {
            "id" : 0,
            "name" : "event1",
            "category" : "food", 
            "location" : "alma",
            "date" : "UTC ",
        }, 
        1 : {
            "id" : 1,
            "name" : "event2",
            "category" : "food", 
            "date" : "UTC ",
            "location" : "alma",
        },
        2 : {
            "id" : 2,
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
def get_event(event_id: str):
    return events[int(event_id)]

@app.post("/event")
def new():
    id = len(events)
    event = {"id": id}
    event.update(request.json)
    events[id] = event
    return str(id)

@app.put("/event/<event_id>")
def update(event_id: str):
      event_id = int(event_id)
      event = {"id": event_id}
      event.update(request.json)
      events[event_id] = event
      return str(event_id)

@app.delete("/event/<event_id>")
def delete(event_id: str):  # no error handling
    del events[int(event_id)]
    print("success")
    return "success"


if __name__ == '__main__':
    app.run()
