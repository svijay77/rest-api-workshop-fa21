from flask import Flask
from flask_restful import Resource, Api

events = {
        0 : {
            "name" : "event1",
            "category" : "food", 
            "date" : "UTC ",
            "quantity": 10
        }, 
        1 : {
            "name" : "event2",
            "category" : "food", 
            "date" : "UTC ",
            "quantity": 10
        },
        2 : {
            "name" : "event3",
            "category" : "food", 
            "date" : "UTC ",
            "quantity": 10
        }}

app = Flask(__name__)
api = Api(app)

class CrowdSourceBulk(Resource):
    def get(self):
        return events

class CrowdSourceAPI(Resource):
    def get(self, event_id: int):
        return events[int(event_id)]

    def post(self, event_id: int):
        self.get
        return events

    def delete(self, event_id: int):
        return events

    def patch(self, event_id: int):
        return events        


api.add_resource(CrowdSourceBulk, '/api/all')
api.add_resource(CrowdSourceAPI, '/api/event/<event_id>')

# api.add_resource(CrowdSourceAPI, '/event/<event_id>')

if __name__ == '__main__':
    app.run(debug=True)