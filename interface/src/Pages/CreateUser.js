
import React, {Component} from 'react';


class CreateUser extends Component {

  getBackendTutorial() {
    const demo_post_create_body = "{'new_user':{'id':50, 'name':'Allgood', 'points':100 }}"

    return (
      <div classname="CreateUser" style={{height:"15vh", marginBottom:"5vh"}}>
        Ideally you'd be able to create users here!
        But, I haven't had enough time to implement front end support for this.

        <div>
        Feel free to use CURL or postman.
        i.e. <div style={{color: "green"}}>POST 127.0.0.1:5000/create</div>
        Use whatever IP address / localhost name is equivalent on your machine.
        </div>
        <hr/>
        Make sure to set 'Content-type':'application/json'
        <br/>
        Send the new_user data in the <span style={{color: "blue"}}>'body'</span> of the request.
        i.e. <div style={{color: "green"}}>{demo_post_create_body}</div>
      </div>
    );
    
  }

  render() {
    return (
      <div classname="CreateUser" style={{height:"15vh", marginBottom:"5vh"}}>
        <div>
          <span style={{color: "orange"}}>Skeleton</span> user input handling. 
          <br/>
          <em>No time to validate, store the inputs and send them to backend.</em>
        </div>
        <form>
          <label for="new-user-id">
            Enter an id: 
          </label>
          <input id="new-user-id" type="number" required/>
          <br/>
          <label for="new-user-name">
            Enter a name: 
          </label>
          <input id="new-user-name" type="text" required/>
          <br/>
          <label for="new-user-points">
            Enter a points value: 
          </label>
          <input id="new-user-points" type="number" required/>

          <input type="submit"/>
        </form>

        <div>
          <hr/>
          {this.getBackendTutorial()}
        </div>
      </div>
    );
    
  }
}

export default CreateUser;
