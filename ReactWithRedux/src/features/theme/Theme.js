import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTextColor } from './themeSlice';

const Theme = () => {
    const [color, setColor] = useState('white');
    const dispatch = useDispatch();
    return (
        <React.Fragment>
            <input type="text" className='textbox' onChange={(event) => { setColor(event.target.value) }} />

            <button className='button' onClick={() => { dispatch(changeTextColor(color)) }}>Change text color</button>
        </React.Fragment>
    )
}

export default Theme;