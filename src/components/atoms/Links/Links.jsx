import React from 'react';
import './Links.css'


const Links = ({ children }) => {
    return <li className="item">
        <a href="." className="item__link">{children}</a>
    </li>
};

export default Links;