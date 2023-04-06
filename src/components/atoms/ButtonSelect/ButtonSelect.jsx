import React from 'react';

const ButtonSelect = ({ onClick, children, style }) => {

    return <button onClick={onClick} className={style} >{children}</button>

}

export default ButtonSelect;