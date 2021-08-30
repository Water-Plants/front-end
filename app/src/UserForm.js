//import Axios from 'Axios';
import React, { useState } from "react";

//import * as yup from 'yup'

function UserForm(props) {
  //setting the button state
  // const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // setting serber error state
  //const [serverError, setServerError] = useState('');

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    username: "",
    password: "",
  });
  const formHandler = (Event) => {
    setData({ ...data, [Event.target.name]: Event.target.value });
  };

  return (
    <div className="UserForm">
      <form>
        <label>
          {" "}
          First Name:
          <input
            type="text" //type inputed
            value={data.firstName} //data.
            name="First Name"
            onChange={formHandler}
          />
        </label>
        <br></br>
        <label>
          Last Name:
          <input
            type="text"
            value={data.lastName}
            name="Last Name"
            onChange={formHandler}
          />
        </label>
        <br></br>
        <label>
          Email Address:
          <input
            type="text"
            value={data.emailAddress}
            name="Email Address"
            onChange={formHandler}
          />
        </label>
        <br></br>
        <label>
          {" "}
          Username:
          <input
            type="text"
            value={data.username}
            name="Username"
            onChange={formHandler}
          />
        </label>
        <br></br>
        <label>
          Password:
          <input
            type="text"
            value={data.password}
            name="Password"
            onChange={formHandler}
          />
        </label>
      </form>
    </div>
  );
}

export default UserForm;
