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
