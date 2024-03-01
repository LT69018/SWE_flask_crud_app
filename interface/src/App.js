// import logo from './logo.svg';
import './bootstrap.css';
import React, {Component} from 'react';
import { DataGrid } from '@mui/x-data-grid';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// no time to try and make these work.
// import ThemeProvider from 'react-bootstrap/ThemeProvider';

import pageStates from './Constants/pageStates.js'

import Home from './Pages/Home.js'
import CreateUser from './Pages/CreateUser.js'
import ReadUsers from './Pages/ReadUsers.js'
import UpdateUser from './Pages/UpdateUser.js'
import DeleteUser from './Pages/DeleteUser.js'

const DEBUG = true;
// todo: make sure this works when called with endpoint as URL


// todo: either here or in ../public/index.html - tie in Bootstrap
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: pageStates.home,
      // will be used in functions that check if we want to change pages or call backend functions 
      isCreatePressed:  false,

      isReadPressed: false,
      reloadUsersTable: false, // <- read!
      isUpdatePressed:  false,
      isDeletePressed:  false,

      users_table: [] 
      // put the table we're currently loading in here so that it is updated when I press the refresh button
    
    }
  }

  // Borrowed from  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  async getDataWithParams(endpoint, params = '') {

    const paramsAsQueryString = new URLSearchParams(params).toString();
    const url = endpoint + '?' + paramsAsQueryString
    // ^ https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams#examples
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json' // <- IMPORTANT to allow me to send our JSON body (arguments)
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url

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

  displayReadResult(data) {
    const users_table = this.state.users_table;
    console.log("Trying to display the users table: ", users_table);
    return (
      <div height="50%">
        READ RESULT DATA WILL GO HERE
        {/* Not allowed to just try to display our list on the page, need to render it */}
        {/* <div>{this.state.users_table}</div> */}
        <DataGrid
          rows={users_table}
          columns={["id", "name", "points"]}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          key="id"
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    );
  }

  /* GET the /read endpoint */
  async getUsers() {
    /*
    Expecting response from the server in this format:
    {
      body: "Some message about the function being executed",
      users: [{id: ..., attrs*:...}, ...]
    }
    */
    if (DEBUG) {
      console.log("Called get Users!")
    }
    try {
      const data = await this.getDataWithParams('/read');
      if (DEBUG) {
        console.log("Received data from getUsers!");
        console.log(data);
      }
      // todo: error checking if the result doesn't contain "users"
      this.setState({users_table: data["users"]});

    } catch (readBackendError) {
      console.log("Something went wrong! Unable to read users!");
      if (DEBUG) {
        console.log(readBackendError);
      }
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


  // handle button presses
  async reloadUserTable() {
    console.log("Reloading users_table!");
    const new_user_table = await this.getUsers();
    this.setState({users_table: new_user_table});
  }

  displayPage(pageNumber) {
    if (pageNumber === pageStates.home) {
      return (
        <Home/>
      );
    } else if (pageNumber === pageStates.pageCreate) {
      return (
        <CreateUser/>
      );
    } else if (pageNumber === pageStates.pageRead) {
      return (
        <ReadUsers 
          displayReadResult={this.displayReadResult}
          reloadUserTable={this.reloadUserTable}
        />
      );
    } else if (pageNumber === pageStates.pageUpdate) {
      return (
        <UpdateUser 
        />
      );
    } else if (pageNumber === pageStates.pageDelete) {
      return (
        <DeleteUser 
        />
      );
    } else {
      // todo: move these to their own pages!
      return (
        <div>
          Cannot render nonexistent page number!
        </div>
      );
    }
  }

  setPageToCreate() {
    console.log("Changing page to CreateUser");
    this.setState({pageNumber: pageStates.createUser});
  }

  setPage(newPageNumber) {
    console.log("Setting page: ", newPageNumber);
    this.setState({pageNumber: newPageNumber});
    return false;
  }

  createClicked = (e) => {
    e.preventDefault();
    console.log('The create link was clicked.');
    this.setState({pageNumber: pageStates.createPage});
  }

  render() {
    return (
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#" onClick={() => this.setPage(pageStates.home)}>
            JT CRUD App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={() => this.setPage(pageStates.home)}>Home</Nav.Link>
              <Nav.Link onClick={() => this.setPage(pageStates.pageCreate)}>Create</Nav.Link>
              <Nav.Link onClick={() => this.setPage(pageStates.pageRead)}>Read</Nav.Link>
              <Nav.Link onClick={() => this.setPage(pageStates.pageUpdate)}>Update</Nav.Link>
              <Nav.Link onClick={() => this.setPage(pageStates.pageDelete)}>Delete</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div style={{ marginTop: "5vh" }}>
          {this.displayPage(this.state.pageNumber)}
        </div>
      </Container>
    );
  }
  
}

export default App;
