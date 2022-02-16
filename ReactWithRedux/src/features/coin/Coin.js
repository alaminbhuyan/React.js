import React from 'react'
import { useSelector } from 'react-redux';

const Coin = () => {
    const coin = useSelector((state) => state.counterme.count);
    const themeTextColor = useSelector((state) => state.theme.color);
    return (
        <React.Fragment>
            <span className='value' style={{ color: themeTextColor }} >Coin: { coin }</span>
        </React.Fragment>
    )
}

export default Coin;