import time
from flask import Flask
from flask import json

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    print("Loaded the home page.")
    response = {
        "body": "welcome to the CRUD Flask Server"
    }
    
    add_options(response)
    return response # Note to self. Returning True causes Error 500 (internal server error) T-T


def add_options(response):
    '''
    Sets default options for all return responses that are successful.
    '''
    response["headers"] = {"content-type": "application/json"},
    response["ok"] = True
    return response