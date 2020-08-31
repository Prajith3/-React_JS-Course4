import axios from 'axios';

const KEY='AIzaSyBnrdYkNW9XpDA8xGslD0gyicPot0Lk2xA';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        type:'video',
        maxResults:5,
        key: KEY
    }
});

