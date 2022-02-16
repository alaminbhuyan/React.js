import React, { useState } from 'react'

const Counter1 = () => {
    const [count, setCount] = useState(0);
    return (
        <React.Fragment>
            <button className='button' aria-label='Increment value' onClick={() => { setCount(count + 1) }}>+</button>
            <span>Count: {count}</span>
            <button className='button' aria-label='Decrement value' onClick={() => { setCount(count - 1) }}>-</button>
        </React.Fragment>
    )
}

export default Counter1;