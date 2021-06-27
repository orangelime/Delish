const state = {
    user:null
}

const getters = {
    user:(state) => {
        return state.user;
    }
}

const mutations = {
    user(state,user){
        state.user = user;
    }
}

const actions = {
    user({commit},user){
        commit('user',user);
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}
// import router from '@/router'
// import axios from "axios";

// const state = {
//     userData: null
// }

// const getters = {
//     user: state => state.userData
// }

// const mutations = {
//     setUserData(state, user) {
//         state.userData = user;
//     }
// }

// const actions = {
//     getUserData({ commit }) {
//         axios
//             .get(process.env.VUE_APP_API_URL + "user")
//             .then(response => {
//                 commit("setUserData", response.data);
//             })
//             .catch(() => {
//                 localStorage.removeItem("token");
//             });
//     },
//     sendLoginRequest({ commit }, data) {
//         axios
//             .post(process.env.VUE_APP_API_URL + "login", data)
//         .then(response => {
//         commit("setUserData", response.data.user);
//         localStorage.setItem("token", response.data.token);
//         });
//     },
//     sendRegisterRequest({ commit }, data) {
    
//     return axios
//         .post(process.env.VUE_APP_API_URL + "register", data)
//         .then(response => {
//         commit("setUserData", response.data.user);
//         localStorage.setItem("token", response.data.token);
//         });
//     },
//     sendLogoutRequest({ commit }) {
//     axios.post(process.env.VUE_APP_API_URL + "logout").then(() => {
//         commit("setUserData", null);
//         localStorage.removeItem("token");
//     });
//     },
//     sendVerifyResendRequest() {
//     return axios.get(process.env.VUE_APP_API_URL + "email/resend");
//     },
// }

// export default{
//     state,
//     getters,
//     mutations,
//     actions
// }