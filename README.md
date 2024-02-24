# SWE_flask_crud_app
Due 2/29

The project is a CRUD (Create, Read, Update, Delete) application developed using Flask, Python, JavaScript, HTML, and CSS. The primary goal is for me to learn the Flask framework and sqlite3 for database operations through hands-on experience!

### Project Structure
Followed instructions from the following blog to build the folders.
https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project
```
SWE_flask_crud_app/
├── interface/
│   └── *.js [React]
└── server/
    └── *.py [Flask]
```
Directory tree string made with https://tree.nathanfriend.io/

## How to use this app!
You can either follow the command instructions below or you can run the 
`run_[backend/frontend].sh` files in their respective directories, 
preferably in separate terminals.

Make sure to have `npm` installed on your machine.
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

### Using my `.sh` files

1. `bash ./setup.sh`
2. `cd server && bash run_backend.sh`
3. `cd interface && bash run_frontend.sh`


### Running the commands manually
### 1. Install dependencies using `npm install`
Note: You may have to delete package-lock.json before running this command.

This will populate the node_modules directory and 
hopefully allow you to start the app in the next step!

### Load Backend: `cd server && source venv/bin/activate && flask run`
In another terminal, start up the backend by...
If you didn't already create the `venv` yet
- do `python3 -m venv server/venv`
Using flask 
`source venv/bin/activate && flask run`

If you want to disable debug mode, 
get rid of `FLASK_ENV=development` in ./server/.flaskenv

To change the port from 5000, you can also edit that .flaskenv file.

### Load Frontend: `cd interface && npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
