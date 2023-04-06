import { useState } from 'react';


export function CarruselState() {
    const [index, setIndex] = useState(0);

    const imageChange = (i) => {
        setIndex(i)
    };

    return { imageChange, index, setIndex }
}