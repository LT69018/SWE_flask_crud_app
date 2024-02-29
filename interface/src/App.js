import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

const DEBUG = true;

// todo: consider if we want to use an App class instead of a function :p

// todo: make sure this works when called with endpoint as URL
// Borrowed from  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
async function getDataWithParams(endpoint, params) {
  const response = await fetch(endpoint, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json' // <- IMPORTANT to allow me to send our JSON body (arguments)
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(params) // body data type must match "Content-Type" header
  });
  return response.json();
}

async function postDataWithParams(endpoint, params) {
  const response = await fetch(endpoint, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json' // <- IMPORTANT to allow me to send our JSON body (arguments)
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(params) // body data type must match "Content-Type" header
  });
  return response.json();
}

function App() {
  // todo: either here or in ../public/index.html - tie in Bootstrap
  return (
    <div className="App">
      <body>
        <div className="welcomeBanner" style={{height:"15vh", marginBottom:"5vh"}}>
          <h1>Welcome to my CRUD app!</h1>
          <span>
            <a href="#createUser">Create</a> 
          | <a href="#readUsers">Read</a> 
          | <a href="#updateUser">Update</a> 
          | <a href="#deleteUser">Delete</a> 
          </span>
        </div>
        <div classname="createUser" style={{height:"15vh", marginBottom:"5vh"}}>
          Create users here!
        </div>
        <div classname="readUsers" style={{height:"15vh", marginBottom:"5vh", display:"block"}}>
          Read users here!
          <form action="/read" method="get">
            <button type="submit" formmethod="get">Load users table</button>
          </form>
        </div>
        <div classname="updateUser" style={{height:"15vh", marginBottom:"5vh"}}>
          Update users here!
        </div>
        <div classname="deleteUser" style={{height:"15vh", marginBottom:"5vh"}}>
          Delete users here!
        </div>
      </body>
    </div>
    
  );
}

export default App;
