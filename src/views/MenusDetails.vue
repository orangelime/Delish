<template>
    <div class="menusdetails">

        <CommonHeader :title="title"></CommonHeader>

        <!-- menus category -->
        <nav class="menusdetails__nav">
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
                <div class="col-1-of-3 col-1-of-3--1" v-for="meal in mealCategory" :key="meal.index" :data-id=meal.idMeal>
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
                                <!-- 如果已signin就直接進入購物車，未signin就跳出popup -->
                                <!-- <div v-if="signedIn || isSignIn">
                                    
                                    <router-link to="/menusdetails" class="btn btn--2" @click="handleAddToCart(index)">Book now!</router-link>
                                    
                                </div>
                                <div v-else>
                                    <a href="#popup" class="btn btn--2" @click="handleAddToCart(index)">Book now!</a>
                                </div> -->
                                <a href="#" :data-id=meal.idMeal class="btn btn--2" @click="getMealDetails($event)">get details</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <Popup :is-show="show" 
                @hide="hidePopup"
                :details="mealDetails"
                >
        </Popup>
        
        
        
        

    </div>
</template>
<script>
import CommonHeader from '@/components/CommonHeader';
import Popup from '@/components/Popup';

export default {
    name:'MenusDetails',
    data(){
        return{
            title:'Chose your favorite',
            mealCategory:[],
            mealDetails:[],
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
            show:false
        }
    },
    components:{
        CommonHeader,
        Popup
    },
    mounted(){
        //sticky nav
        window.addEventListener('scroll',this.fixedNav,true);
    },
    created(){
        this.getMealData(this.categories[8]);
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
        //get category data
        async getMealData(category){
            const dataUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.type}`;
            try{
                const response = await fetch(dataUrl);
                const data = await response.json();
                this.mealCategory = data.meals;
                //console.log(this.mealCategory);
            }catch(e){
                console.log(e);
            }
        },
        //get meal id data getMealDetails($event)
        async getMealDetails(e){
            this.show = true;
            let id = e.target.getAttribute('data-id');
            //console.log(id);
            const dataUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
            try{
                const response = await fetch(dataUrl);
                //console.log(response);
                const data = await response.json();
                this.mealDetails = data.meals;
                console.log(this.mealDetails);
            }catch(e){
                console.log(e);
            }
        },
        menuName(category){
            this.getMealData(category);
        },
        //sticky nav
        fixedNav(){
            const nav = document.querySelector('.menusdetails__nav');
            let topOfNav = nav.offsetTop;
            
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
        },
        showPopup(){
            this.show = true;
            //this.getMealDetails(id);
        },
        hidePopup() {
            this.show = false;
        }

    },
    
}
</script>

<style>

</style>