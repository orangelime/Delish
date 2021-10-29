//TheMealDB API
const state = {
    mealCategory:[],
    mealDetails:[],
    show:false
    
}

const getters = {

}

const mutations = {
    setmealCategory(state,mealCategory){
        state.mealCategory = mealCategory;
    },
    setmealDetails(state,mealDetails){
        state.show = true
        state.mealDetails = mealDetails;
    },
    setclosePopupShow:(state) =>{
        state.show = false;
    }
    
}

const actions = {
    async getMealData( { commit } , category){
        const dataUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.type}`;
        try{
            const response = await fetch(dataUrl);
            const data = await response.json();
            commit('setmealCategory',data.meals);
        }catch(e){
            console.log(e);
        }
    },
    async getMealDetails( { commit } , e){
        // this.show = true;
        let id = e.target.getAttribute('data-id');
        //console.log(id);
        const dataUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        try{
            const response = await fetch(dataUrl);
            //console.log(response);
            const data = await response.json();
            commit('setmealDetails',data.meals);
            //console.log(this.mealDetails);
        }catch(e){
            console.log(e);
        }
    },
    closePopup( { commit } ){
        commit('setclosePopupShow');
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}