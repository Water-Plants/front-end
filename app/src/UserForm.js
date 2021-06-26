
import React, {useState} from 'react';
import  './App.css';


function UserForm() {
    const [data, setData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
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
                   <input
                    type=""
                    />
                </label>
                </form>
        </div>
    )
}

export default UserForm;