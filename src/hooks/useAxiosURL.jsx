import axios from 'axios';

const axiosURL = axios.create({
     baseURL: 'https://polling-and-survey-server.vercel.app'
})
const useAxiosURL = () => {
    return axiosURL
};

export default useAxiosURL;