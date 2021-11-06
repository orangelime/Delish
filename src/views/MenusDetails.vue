<template>
    <div class="menusdetails">

        <CommonHeader :title="title"></CommonHeader>

        <!-- menus category -->
        <nav class="menusdetails__nav">

            <!-- dropdown triangle -->
            <div class="menusdetails__dropdownBackground">
                <span class="menusdetails__arrow"></span>
            </div>

            <ul class="menusdetails__list">
                <li class="menusdetails__name" v-for="(category,index) in categories.slice(0,1)" :key="index">
                    <a href="#" class="heading-secondary heading-secondary--1" @click="menuName(category)">
                        {{category.type}}
                    </a>
                </li>
                <li class="menusdetails__name">
                    <a href="#" class="heading-secondary heading-secondary--1" @click="dropdownMaincourse()" v-clickoutside="closeDropdown">
                        Main Course
                    </a>
                </li>
                    <!-- dropdown course-->
                    <ul class="menusdetails__category dropdown">
                        <li class="menusdetails__name menusdetails__name-1" v-for="(category,index) in categories.slice(1,8)" :key="index">
                            <a href="#" class="heading-secondary heading-secondary--2" @click="menuName(category)">
                                {{category.type}}
                            </a>
                        </li>
                    </ul>

                <li class="menusdetails__name" v-for="(category,index) in categories.slice(8,9)" :key="index+1">
                    <a href="#" class="heading-secondary heading-secondary--1" @click="menuName(category)">
                        {{category.type}}
                    </a>
                </li>
            </ul>
        </nav> 
            
        <!-- menus details -->
        <div class="menusdetails__content">
            <div class="row">
                <div class="col-1-of-3 col-1-of-3--1" v-for="meal in mealCategory" :key="meal.index">
                    <div class="card">
                        <div class="card__side card__side--details">
                            <div class="card__img-box">
                                <img :src=meal.strMealThumb alt="">
                            </div>
                            <h4 class="card__heading card__heading--1">
                                <span class="card__heading-span card__heading-span--2">
                                    {{meal.strMeal}}
                                </span>
                            </h4>
                            <div class="card__cta card__cta--1">
                                <a href="javascript:void(0);" :data-id=meal.idMeal class="btn btn--2" @click="getMealDetails($event)">get details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Popup></Popup>

        <!-- shopping-cart icon -->
        <div class="menusdetails__icon">
            <div class="menusdetails__icon-length" v-if="mealsCart.length">
                <h1 class="shoppingcart__welcome-text-1">{{mealsCart.length}}</h1>
            </div>
            <router-link to="/shoppingcart" class="menusdetails__icon-button">
                <img class="menusdetails__icon-cart" src="../assets/img/shopping-cart-1x.png">
            </router-link>
        </div>
    </div>
</template>
<script>
import CommonHeader from '@/components/CommonHeader';
import Popup from '@/components/Popup';
import { mapActions , mapGetters } from 'vuex';

export default {
    name:'MenusDetails',
    data(){
        return{
            title:'Chose your favorite',
            categories:[
                        {type:'starter'},
                        {type:'chicken'},
                        {type:'beef'},
                        {type:'pork'},
                        {type:'seafood'},
                        {type:'pasta'},
                        {type:'lamb'},
                        {type:'goat'},
                        {type:'dessert'}
            ],
        }
    },
    components:{
        CommonHeader,
        Popup
    },
    computed:{
        ...mapGetters(['mealCategory','show','mealsCart'])
    },
    mounted(){
        //sticky nav
        window.addEventListener('scroll',this.fixedNav,true);
        this.$store.dispatch('getMealData',this.categories[8]);
        
    },
    beforeDestroy(){
        //destroy sticky nav
        window.removeEventListener('scroll',this.fixedNav,true);
    },
    created(){
        
    },
    //close dropdown
    directives:{
        clickoutside:{
            bind(el,binding,vnode){
                function documentHandler(e){
                if(el.contains(e.target)){
                    return false;
                }
                if(binding.expression){
                    binding.value(e)
                }
                }
                el._vueClickOutside_ = documentHandler;
                document.addEventListener('click',documentHandler);
            },
            unbind(el,binding){
                document.removeEventListener('click',el._vueClickOutside_);
                delete el._vueClickOutside_;
            }
        }
    },
    methods:{
        ...mapActions(['getMealData','getMealDetails']),
        menuName(category){
            this.getMealData(category);
        },
        //sticky nav
        fixedNav(){
            const nav = document.querySelector('.menusdetails__nav');
            let topOfNav = nav.offsetTop;
            //console.log(topOfNav)
            
            if(window.scrollY+100 >= topOfNav){
                //console.log(window.scrollY >= topOfNav)
                nav.classList.add('fixed-nav');
            }else{
                nav.classList.remove('fixed-nav');
            }
        },
        //dropdown other category
        dropdownMaincourse(){
            //console.log(this)
            const background = document.querySelector('.menusdetails__dropdownBackground');
            const nav = document.querySelector('.menusdetails__nav');
            const item = document.querySelector('.menusdetails__category');

            item.classList.add('trigger-enter');
            
            setTimeout(() => {
                if(item.classList.contains('trigger-enter')){
                    item.classList.add('trigger-enter-active');
                }
            },150);
            background.classList.add('open');
            
            //將背景移到navItem後面
            const dropdown = document.querySelector('.dropdown');
            // console.log(dropdown)
            const dropdownCoords = dropdown.getBoundingClientRect();
            // console.log(dropdownCoords);//DOMRect
            const navCoords = nav.getBoundingClientRect();
            // console.log(navCoords)
            
            const coords = {
                height:dropdownCoords.height,
                width:dropdownCoords.width,
                top:dropdownCoords.top - navCoords.top,
                left:dropdownCoords.left - navCoords.left
            }

            background.style.setProperty('width',`${coords.width}px`);
            background.style.setProperty('height',`${coords.height}px`);
            background.style.setProperty('transform',`translate(${coords.left}px,${coords.top}px)`);
        },
        closeDropdown(){
            const background = document.querySelector('.menusdetails__dropdownBackground');
            const item = document.querySelector('.menusdetails__category');

            item.classList.remove('trigger-enter','trigger-enter-active');
            background.classList.remove('open');
        }
    }
    
}
</script>

<style>

</style>