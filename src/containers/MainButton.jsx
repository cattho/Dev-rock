import React from 'react'

const MainButton = (props) => {
    const { onClick, children } = props;
    return (
        <button onClick={onClick} className='home-item-comprar'>
            {children}
        </button>
    )
}

export default MainButton