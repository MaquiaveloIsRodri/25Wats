import { useState } from 'react';

export function useOpenMenu() {
    const [click, setClick] = useState(false);

    const onClick = () => {
        setClick(!click);
    };

    return [click, onClick];
}