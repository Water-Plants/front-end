
import React from 'react';



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