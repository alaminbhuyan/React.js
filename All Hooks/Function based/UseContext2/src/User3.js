import React, { useContext } from 'react'
import { MyContext } from './App'

const User3 = () => {
    const { user, handleFunc } = useContext(MyContext);
    return (
        <div>
            <h1>This is user 3</h1>
            <p>The user name is: {user.name}</p>
            <p>The user age is: {user.age}</p><hr />
            <div>
                <MyContext.Consumer>
                    {
                        ({ user, handleFunc }) => (
                            <div>
                                <h3>Name: {user.name}, Age: {user.age}</h3>
                                <button type='button' onClick={handleFunc}>Change Age</button>
                            </div>
                        )
                    }
                </MyContext.Consumer>
            </div>
        </div>
    )
}

export default User3;

// !I show here tow way to access the state value