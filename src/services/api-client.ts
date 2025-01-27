import axios from 'axios';

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "f5fd63a398fe45e2b9b4032ba096dd21"
    }
});