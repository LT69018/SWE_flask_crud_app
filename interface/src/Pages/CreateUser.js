
import React, {Component} from 'react';


class CreateUser extends Component {

  render() {
    const demo_post_create_body = "{'new_user':{'id':50, 'name':'Allgood', 'points':100 }}"

    return (
      <div classname="CreateUser" style={{height:"15vh", marginBottom:"5vh"}}>
        Ideally you'd be able to create users here!
        But, I haven't had time to implement front end support for this.

        <div>
        Feel free to use CURL or postman.
        i.e. <div style={{color: "green"}}>POST 127.0.0.1:5000/create</div>
        Use whatever IP address / localhost name is equivalent on your machine.
        </div>
        <hr/>
        Make sure to set 'Content-type':'application/json'
        Send the new_user data in the <span style={{color: "blue"}}>'body'</span> of the request.
        i.e. <div style={{color: "green"}}>{demo_post_create_body}</div>
      </div>
    );
  }
}

export default CreateUser;
