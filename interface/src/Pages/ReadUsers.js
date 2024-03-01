import React, { Component } from "react";

import { DataGrid } from '@mui/x-data-grid';
import Container from 'react-bootstrap/Container';
import DEBUG from '../App.js';

class ReadUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users_table: null,
    };
  }

  reloadUserTable() {
    console.log("Reloading users_table!");
    const new_user_table = this.getUsers();
    this.setState({users_table: new_user_table});
  }

  displayReadResult(data) {
    const users_table = this.state.users_table;
    console.log("Trying to display the users table: ", users_table);

    if (users_table === null) {
      console.log("users_table is currently null. :(");
      return (<div>Unable to load table.</div>)
    }

    return (
      <Container>
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
          // checkboxSelection
        />
      </Container>
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
      const data = await this.props.getDataWithParams('/read');
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


	render() {
		return (
      <div>
        <h2>Welcome to the READ Page!</h2>
        <div classname="ReadUsers" style={{height:"15vh", marginBottom:"5vh", display:"block"}}>
          Read users here!
          {/* <form action={this.getUsers} method="get">
            <button type="submit" formmethod="get">Load users table</button>
          </form> */}
          <div>
            <div>{this.displayReadResult()}</div>
            <button type="submit" onClick={() => this.reloadUserTable()}>Load/Refresh</button>
          </div>
        </div>
      </div>
    );
	}
}

export default ReadUsers;