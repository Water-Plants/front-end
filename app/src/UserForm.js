
import React, {useState} from 'react';
import  './App.css';


function UserForm() {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: ''
    });
    const formHandler = event => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    
    return (
        <div className="UserForm">
            <form>
                <label> First Name:
                    <input
                        type="text" //type inputed
                        value = {data.firstName}//data.
                    name = 'First Name'
                        onChange={formHandler}
                    />
                </label>
                <br></br>
                   <label>Last Name:
                    <input
                    type="text"
                    value = {data.lastName}
                        name='Last Name'
                        onChange={formHandler}
                    />
                </label>
                <br></br>
                     <label>Email:
                    <input
                    type="text"
                    value = {data.email}
                        name='Email'
                        onChange={formHandler}
                    />
                </label>
                <br></br>
                <label> Username:
                    <input
                    type="text"
                    value = {data.username}
                        name='Username'
                        onChange={formHandler}
                    />
                </label>
                <br></br>
                <label>Password:
                    <input
                    type="text"
                    value = {data.password}
                        name='Password'
                        onChange={formHandler}
                    />
                </label>
                </form>
        </div>
    )
}

export default UserForm;
<UserForm/>