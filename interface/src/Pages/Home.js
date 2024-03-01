import React, { Component } from "react";

class Home extends Component {
	render() {
		return (
      <div>
        <h2 style={{color: "purple", textAlign:'center'}}>Welcome to the Home Page!</h2>
        <hr/>
        <h4>How to Navigate this site:</h4>
        <p>
          Use the navbar on the top of the page to go to pages. 
          <br/>
          Each navlink corresponds to one of the CRUD functions!</p>
        <p>
          Note: 
          the green color means this page is fully-mostly functional ^-^
          <br/>
          the orange color means partially function :D
        </p>
        <ul>
          <li><span style={{color: "green"}}>Home: </span> 
            Same as this page. Come back if you get lost ;)</li>
          <li><span style={{color: "orange"}}>Create: </span> 
            Add a user to the database</li>
          <li><span style={{color: "green"}}>Read: </span> 
            View a nicely formatted rendition of the current database :)</li>
          <li>Update: (ran out of time) 
            Placeholder page to let you change user data.</li>
          <li>Delete: (ran out of time) 
            Placeholder page to let you delete user data.</li>
        </ul>
      </div>
    );
	}
}

export default Home;
