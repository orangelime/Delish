<template>
    <div class="popup" v-show="isShow">
        <div class="popup__content">
            
            <!-- shopping success icon -->
            <div class="icon" v-show="showingIcon" :class="{showing:showingIcon}">
                <div class="icon__content">
                    <svg class="icon__svg" viewBox="0 0 100 100" width="120" height="120">
                        <circle class="icon__circle" cx="50" cy="50" r="48"></circle>
                        <polyline class="icon__check" points="28,53 42,66 74,34"></polyline>
                    </svg>
                    <h1 class="icon__heading">
                        Add to basket
                    </h1>
                </div>
            </div>

            <div class="popup__dialog" v-for="detail in details" :key="detail.id">
                <a href="javascript:void(0);" class="popup__close" @click="closePopup">&times;</a>
                <div class="popup__box">
                    <div class="popup__logobox">
                        <img class="popup__logo" :src=detail.strMealThumb :alt=detail.strMeal>
                    </div>
                    <div class="popup__text">
                        <h1 class="popup__heading popup__heading-1">
                            {{detail.strMeal}}
                        </h1>
                        <h1 class="popup__heading">
                            Area:{{detail.strArea}}
                        </h1>
                        <h1 class="popup__heading">
                            Ingredient:
                        </h1>
                        <h1 class="popup__heading">
                            <p class="popup__heading" v-for="ingredient in getIngredients" :key="ingredient.index">
                                {{ingredient.toString()}}
                            </p>
                        </h1>
                    </div>
                </div>
                
            </div>
            <div class="popup__button">
                <button class="btn btn--popup btn--animated" @click="addToBasket">Add to basket</button>
            </div>
            
        </div>

        
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';


export default {
    name:'Popup',
    props:{
        isShow:Boolean,
        details:Array
    },
    data(){
        return{
            showingIcon:false
        }
    },
    computed:{
        ...mapState({
            show: state => state.meals.show,
        }),
    },
    methods:{
        // closePopup(){
        //     this.$emit('hide');
        // },
        ...mapActions(['closePopup']),
        addToBasket(){
            this.showingIcon = true;
        
            setTimeout(() => {
                this.showingIcon = false;
            },1000)
        }
    },
    computed:{
        getIngredients(){
            //console.log(this.details['strIngredient1'])
            return this.details.map(el => {
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
        
        }
    }
}
</script>

<style>

</style>