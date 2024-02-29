import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

const DEBUG = true;
// todo: make sure this works when called with endpoint as URL


// todo: either here or in ../public/index.html - tie in Bootstrap
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // will be used in functions that check if we want to change pages or call backend functions 
      isCreatePressed:  false,
      isReadPressed:    false,
      isUpdatePressed:  false,
      isDeletePressed:  false
    }
  }

  // Borrowed from  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  async getDataWithParams(endpoint, params) {
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

  async postDataWithParams(endpoint, params) {
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

  // -----------------------------------------------------
  // These functions will only run when their respective button state is toggled.
  async createUser(new_user) {
    /* POST the /create endpoint */
    if (DEBUG) {
      console.log("Called createUser!")
    }
  }

  async getUsers() {
    /* GET the /read endpoint */
    if (DEBUG) {
      console.log("Called getUsers!")
    }
  }

  async updateUserPoints(user_id, new_points) {
    /* POST the /update endpoint 
    Currently only thinking to let them change the points value, not the name.
    */
    if (DEBUG) {
      console.log("Called updateUserPoints!")
    }
  }

  async deleteUser(user_id) {
    /* GET the /delete endpoint 
    */
    if (DEBUG) {
      console.log("Called deleteUser!")
    }
  }
  // -----------------------------------------------------

  render() {
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
              <form action={this.getUsers} method="get">
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
  
}

export default App;
