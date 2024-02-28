import time
from flask import Flask
from flask import json
import os
# (currently unsuccessfully) attempted to use cors to me to use postman `localhost` requests.
from flask_cors import CORS
from config import *

app = Flask(__name__)


# Access the port from environment variables
port = int(os.environ.get('FLASK_RUN_PORT', 5000))
app.config['PORT'] = port

# Enable CORS for specific routes
CORS(app, resources={r'*': {'origins': '*'}})


@app.route('/', methods=['GET'])
def home():
    print("Loaded the home page.")
    response = {
        "body": "welcome to the CRUD Flask Server"
    }
    
    add_options(response)
    return response

@app.route('/create', methods=['POST'])
def add_user(new_user):
    # i.e. {uid: ..., attrs*:...*}
    pass

@app.route('/read', methods=['GET'])
def get_users():
    # i.e. select * from users
    pass

@app.route('/update', methods=['POST'])
def update_user(curr_user, new_user):
    pass

@app.route('/delete', methods=['POST'])
def delete_user(user_id):
    pass


def add_options(response):
    '''
    Sets default options for all return responses that are successful.
    '''
    response["headers"] = {"content-type": "application/json"},
    response["ok"] = True
    return response