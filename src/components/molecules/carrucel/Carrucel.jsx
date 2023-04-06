


import React from 'react';
import CartToHome from '../CartToHome/CartToHome';
import slice1 from "../../../assets/img/slide1-background.png";
import slice2 from "../../../assets/img/slide2-background.png";
import slice3 from "../../../assets/img/slide3-background.png";

const Carrusel = () => {
    const Cards = [
        { "id": 0, "img": slice1, "text": "render" },
        { "id": 1, "img": slice2 },
        { "id": 2, "img": slice3 },
    ];

    return (
        <div className="carrusel">
            <CartToHome Cards={Cards} />
        </div>
    );
};

export default Carrusel;

//<button onClick={}>Anterior</button>
//<button onClick={}>Siguiente</button>