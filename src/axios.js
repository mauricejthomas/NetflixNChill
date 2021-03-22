import axios from 'axios';

// serves as base url to make requests to the movie database
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
