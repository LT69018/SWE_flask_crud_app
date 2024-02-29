import React, { Component } from "react";

class ReadUsers extends Component {
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
            <div>{this.props.displayReadResult()}</div>
            <button type="submit" onClick={this.props.reloadUserTable}>Load/Refresh</button>
          </div>
        </div>
      </div>
    );
	}
}

export default ReadUsers;