const state = {
    errors:[]
}

const getters = {
    errors:state => state.errors
}

const mutations = {
    setErrors(state,errors){
        state.errors = errors;
    }
}

export default{
    state,
    getters,
    mutations
}