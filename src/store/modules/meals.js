//TheMealDB API
const state = {
    mealCategory:[],
    mealDetails:[],
    show:false,
    showingIcon:false,
    mealsCart:[]
}

const getters = {
    mealCategory:state => state.mealCategory,
    mealDetails:state => state.mealDetails,
    show:state => state.show,
    showingIcon:state => state.showingIcon,
    getIngredients:state =>{
        //console.log(this.details['strIngredient1'])
        return state.mealDetails.map(el => {
            //console.log(el.strIngredient1)
            let result = [];
            for(let i=1;i<=30;i++){
                if(el[`strIngredient${i}`] == ''){
                    break;
                }
                result.push(el[`strIngredient${i}`]);
            }
            return result;
        })
    },
    mealsCart:state => state.mealsCart
}

const mutations = {
    setmealCategory:(state,mealCategory) => {
        state.mealCategory = mealCategory;
    },
    setmealDetails:(state,mealDetails) => {
        state.show = true
        state.mealDetails = mealDetails;
    },
    setclosePopupShow:(state) => {
        state.show = false;
    },
    setshowingIcon:(state) => {
        state.showingIcon = true;

        setTimeout(() => {
            state.showingIcon = false;
        },1000)
    },
    setaddMealToCart:(state, { mealDetails , quantity}) => {
        state.mealsCart.push({mealDetails,quantity})
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
    },
    addMealToCart( { commit } , { mealDetails , quantity}){
        commit('setaddMealToCart', {mealDetails,quantity});
        commit('setshowingIcon');
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}