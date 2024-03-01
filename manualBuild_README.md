
### Running the commands manually
### 1. Install dependencies 
```npm install```
Note: You may have to delete package-lock.json before running this command.

This will populate the node_modules directory and 
hopefully allow you to start the app in the next step!

### Load Backend: 
```
cd server && source venv/bin/activate && flask run
```
In another terminal, start up the backend by...
If you didn't already create the `venv` yet
- do `python3 -m venv server/venv`
Using flask 
`source venv/bin/activate && flask run`

If you want to disable debug mode, 
get rid of `FLASK_ENV=development` in ./server/.flaskenv

To change the port from 5000, you can also edit that .flaskenv file.

### Load Frontend: 
```
cd interface && npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
