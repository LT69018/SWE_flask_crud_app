import time
from flask import Flask, json, request
import os
# (currently unsuccessfully) attempted to use cors to allow me to use postman `localhost` requests.
from flask_cors import CORS
from config import *

from database import \
    connect_to_db, create_users_table, create_user, read_all_users, \
    ID_KEY, NAME_KEY, POINTS_KEY, \
    are_keys_matching_db, \
    sqlite3Error
# note to self, remember to commit and close once I instantiate a connection!

app = Flask(__name__)


# Access the port from environment variables
port = int(os.environ.get('FLASK_RUN_PORT', 5000))
app.config['PORT'] = port

# Enable CORS for specific routes
CORS(app, resources={r'*': {'origins': '*'}})


@app.route('/', methods=['GET'])
def home():
    response = {
            "body": "welcome to the CRUD Flask Server"
        }
    try:
        create_users_table()
        
        print("Successfully loaded the home page :D")
        add_options(response)
    except:
        response['ok'] = False
        print("Unable to load home page.")
    
    return response

@app.route('/create', methods=['POST'])
def create():
    """
    Add a row to the user's table
    
    (implicit paremeter, expected when called using HTTP POST request.)
    :param new_user: Attributes for the row we want to add!
        Example {"id": ..., "name": ..., "points": ...}
    :type new_user: dict
    
    :return: HTTP response
    :rtype: dictionary of response status
    """
    response = {
        "body": "`Create User` backend function."
    }
    new_user = request.args['new_user']
    print(f"request.args = {request.args} ({type(request.args)})\n" +
          f"request.args['new_user']={new_user} ({type(new_user)})\n" + 
          f"request.get_json() = {request.get_json} ({type(request.get_json())})")
    try:
        create_user(new_user)
        
        print("Successfully created user.")
        add_options(response)
    except Exception as e:
        print("Unable to create user.")
        response['ok'] = False
        print(e)
    
    return response

@app.route('/read', methods=['GET'])
def read():
    """
    Read ALL row to the user's table (in the future, may reduce to just 1 or N rows)

    :return: HTTP response
    :rtype: dictionary of response status
    """
    response = {
        "body": "`Read users` backend function"
    }
    
    try:
        response["users"] = read_all_users()
        
        print("Successfully created user.")
        add_options(response)
    except:
        print("Unable to create user.")
    
    return response


@app.route('/update', methods=['POST'])
def update(id, new_points, new_name=""):
    # based on a user's id, give them a new points value.
    pass


@app.route('/delete', methods=['POST'])
def delete(user_id):
    pass


def add_options(response):
    '''
    Sets default options for all return responses that are successful.
    '''
    response["headers"] = {"content-type": "application/json"},
    response["ok"] = True
    return response