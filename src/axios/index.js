import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

// const token = localStorage.getItem('token');

// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 

axios.interceptors.request.use(function(config) {
    config.headers.common = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
    };
    
    return config;
});

export default axios;