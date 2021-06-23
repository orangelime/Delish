import axios from 'axios'
import store from "@/store";
import router from '@/router';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

// const token = localStorage.getItem('token');

// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    //console.log(error.response.data)
if (error.response.status === 401) {
    store.commit('user',null);
    localStorage.removeItem("token");
}
    return Promise.reject(error)
})

axios.interceptors.request.use((config) =>{
    config.headers.common = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
    };
    
    return config;
});

export default axios;