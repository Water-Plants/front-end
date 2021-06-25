import axios from 'axios';
//import { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import React from 'react';
import * as yup from 'yup';

//class form
// class UserForm extends React.Component{
//     render() {
//         return (
//             <div className="UserForm">
                
//         </div>
//     )

//     }
// }


// export default UserForm;


//hook format

export default function UserForm() {
    return (
        <form>
            <input type="text" placeholder="Email" name="email"/>
            <input type="password" placeholder='Password' name="password" />
            <input type="Submit" />
        </form>
    )

}