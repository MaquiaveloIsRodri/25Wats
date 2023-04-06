
import { useEffect, useState } from 'react';
import fetchData from '../api/Api25wats';

export default function FetchProducts() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getData() {
            const newData = await fetchData();
            setData(newData);
        }
        getData();
    }, [])

    return { data };
}


