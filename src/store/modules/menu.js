const state = {
    menus:[
        {
            id:1,
            name:'family gathering',
            price:888,
            
            details:{
                people:'Up to 6 people',
                appetizers:'Choice of 1 appetizers',
                salad:'Classic Caesar Salad',
                main_course:'Choice of 2 main courses',
                dessert:'Special dessert'
            }
        },
        {
            id:2,
            name:'commnunity gathering',
            price:1688,
            
            details:{
                people:'Up to 12 people',
                appetizers:'Choice of 2 appetizers',
                salad:'Garlic Bread and Cheese',
                main_course:'Choice of 3 main courses',
                dessert:'Choice of 1 dessert'
            }
        },
        {
            id:3,
            name:'large dinner party',
            price:2688,
            
            details:{
                people:'Up to 20 people',
                appetizers:'Choice of 3 appetizers',
                salad:'Salmon Avocado Salad',
                main_course:'Choice of 6 main courses',
                dessert:'Choice of 3 dessert'
            }
        }
    ],

    menuList:null
}

const getters = {
    menus:state => state.menus,
    menuList:state => state.menuList
}

const mutations = {
    menuList(state,menuList){
        state.menuList = menuList;
        // console.log(menuList)
    }
}

const actions = {
    
}

export default{
    state,
    getters,
    mutations,
    actions
}