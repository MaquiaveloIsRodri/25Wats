import axios from 'axios';


async function fetchData() {
    const response = await axios.get('http://localhost:3000/products');
    const data = response.data;
    return data;
}



export default fetchData;