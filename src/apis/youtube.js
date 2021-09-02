import axios from 'axios';

const KEY = 'AIzaSyAWXwhpiUcBQ3xnIaKTOzMIKo_Zewc5B1Q';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        type: 'video',
        key: KEY
    }
});
