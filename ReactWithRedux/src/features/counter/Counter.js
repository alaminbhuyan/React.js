import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';



//# Function start from here

const Counter = () => {
    const count = useSelector((state) => state.counterme.count);
    const themeTextColor = useSelector((state) => state.theme.color);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <button className='button' aria-label='Increment value' onClick={() => { dispatch(increment()) }}>+</button>
            <span className='value' style={{ color: themeTextColor}}>Count: {count}</span>
            <button className='button' aria-label='Decrement value' onClick={() => { dispatch(decrement()) }}>-</button>
            <button className='button' onClick={() => { dispatch(incrementByAmount(10)) }}>Increment by 10</button>
        </React.Fragment>
    )
}

export default Counter;