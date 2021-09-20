from flask import Flask

free_stuff = {0: ("snacks", "Siebel Center", 100), 
              1: ("swag", "Illini Union", 100)}

print('Starting server...')
app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Welcome to OSAI!</p>"
