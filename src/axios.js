import axios from 'axios';

// serves as base url to make requests to the movie database
let instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
