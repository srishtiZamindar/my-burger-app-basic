import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-14076.firebaseio.com/'
});

export default instance;