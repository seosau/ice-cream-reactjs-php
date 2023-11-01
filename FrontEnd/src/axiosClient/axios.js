import axios from 'axios'
// const REACT_APP_API_BASE_URL='http://localhost:8000'
const axiosClient = axios.create({
    baseURL:`${process.env.REACT_APP_API_BASE_URL}/api`
})

axiosClient.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('TOKEN')}`
    return config
})

axiosClient.interceptors.response.use(response => {
    return response;
},error => {
    if(error.response && error.response.status === 401){
        localStorage.removeItem('TOKEN');
        window.location.reload();
        return error
    }
    throw error;
})

export default axiosClient;