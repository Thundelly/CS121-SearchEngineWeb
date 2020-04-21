import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID s5CADcZP8IW1JPN8NEfCuRA2I7KuPnmJiAx8Q993pJM'
    }
});