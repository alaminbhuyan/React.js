import React, { useContext } from 'react'
import { MyContext } from './App'

const User3 = () => {
    const user = useContext(MyContext);
    return (
        <div>
            <h1>This is user 3</h1>
            <p>The user name is: {user.name}</p>
            <p>The user age is: {user.age}</p><hr />
            <div>
                <MyContext.Consumer>
                    {
                        data => (<h3>name: {data.name}, age: {data.age}</h3>)
                    }
                </MyContext.Consumer>
            </div>
        </div>
    )
}

export default User3;

// !I show here tow way to access the state value