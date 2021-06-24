import axios from 'axios'
import store from "@/store";
import router from '@/router';

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

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

// axios.interceptors.response.use(
//     response => response,
//     error => {
//         if (error.response.status === 422) {
//             store.commit("setErrors", error.response.data.errors);
//         } else if (error.response.status === 401) {
//             store.commit('user', null);
//             localStorage.removeItem("token");
//         } else {
//             return Promise.reject(error);
//         }
//     }
// );

axios.interceptors.request.use((config) =>{
    config.headers.common = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json"
    };
    
    return config;
});

export default axios;