import React, {useEffect, useState} from 'react'
import axios from './axios';
import requests from './Requests';

function Banner() {
    let [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let request = await axios.get(requests.fetchNetflixOriginals);

        }
        fetchData();
    }, []);
    
    return (
        <header>
            {/*title*/}
            {/*div > 2 buttons */}
            {/*description*/}
        </header>
            
        
    )
}

export default Banner

