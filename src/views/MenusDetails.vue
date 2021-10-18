<template>
    <div class="menusdetails">
        <!-- signin header -->
        <div class="shoppingcart__header">
            <div class="header__logo-box">
                <router-link to="/index">
                    <img class="header__logo" src="../assets/img/logo-white.png" alt="Logo">
                </router-link>
            </div>
            <div class="shoppingcart__welcome-content">
                <!-- google signIn -->
                <div class="shoppingcart__welcome-box" v-if="signedIn">
                    <div class="shoppingcart__welcome-box--left">
                        <div class="shoppingcart__welcome-text">
                            <p class="shoppingcart__welcome-text-1">Welcome &emsp;</p>
                            <p class="shoppingcart__welcome-text-2">{{profile.getEmail()}}</p>
                        </div>
                    </div>
                    <div class="shoppingcart__welcome-box--right">
                        <a class="btn btn--white btn--animated" @click="userSignOut">Sign out</a>
                    </div>
                </div>
                <!-- user signin -->
                <div class="shoppingcart__welcome-box" v-else-if="isSignIn"> 
                    <div class="shoppingcart__welcome-box--left">
                        <div class="shoppingcart__welcome-text">
                            <p class="shoppingcart__welcome-text-1">Welcome &emsp;</p>
                            <p class="shoppingcart__welcome-text-2">1234@email.com</p>
                        </div>
                    </div>
                    <div class="shoppingcart__welcome-box--right">
                        <a class="btn btn--white btn--animated" @click="userSignOut">Sign out</a>
                    </div>
                </div>
                <div class="shoppingcart__welcome-box" v-else>
                    <div class="shoppingcart__welcome-box--left shoppingcart__welcome-box--left-1">
                        <h1 class="heading-primary u-margin-top-small">
                            Welcome
                        </h1>
                    </div>
                    <div class="shoppingcart__welcome-box--right">
                        <router-link to="/signin" class="btn btn--white btn--animated">Sign in</router-link>
                    </div>
                </div>
            </div>
            <div class="header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--sub u-margin-top-giant">Chose your favorite</span>
                </h1>
            </div>
        </div>

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
                    <a href="#" class="heading-secondary heading-secondary--1" @click="dropdownCategory()">
                        Main Course
                    </a>
                </li>
                    <ul class="menusdetails__category dropdown">
                        <li class="menusdetails__name menusdetails__name-1" v-for="(category,index) in categories.slice(1,8)" :key="index">
                            <a href="#" class="heading-secondary heading-secondary--2" @click="menuName(category)">
                                {{category.type}}
                            </a>
                        </li>
                        <!-- <li class="menusdetails__name menusdetails__name-1">
                            <a href="#" class="heading-secondary heading-secondary--2">
                                Salmon
                            </a>
                        </li>
                        <li class="menusdetails__name menusdetails__name-1">
                            <a href="#" class="heading-secondary heading-secondary--2">
                                Beef
                            </a>
                        </li>
                        <li class="menusdetails__name menusdetails__name-1">
                            <a href="#" class="heading-secondary heading-secondary--2">
                                Pork
                            </a>
                        </li>
                        <li class="menusdetails__name menusdetails__name-1">
                            <a href="#" class="heading-secondary heading-secondary--2">
                                Seafood
                            </a>
                        </li>
                        <li class="menusdetails__name menusdetails__name-1">
                            <a href="#" class="heading-secondary heading-secondary--2">
                                Pasta
                            </a>
                        </li>
                        <li class="menusdetails__name menusdetails__name-1">
                            <a href="#" class="heading-secondary heading-secondary--2">
                                Lamb
                            </a>
                        </li> -->
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
                <div class="col-1-of-3 col-1-of-3--1" v-for="meal in mealDetails" :key="meal.idMeal">
                    <div class="card">
                        <div class="card__side card__side--front">
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
                                <div v-if="signedIn || isSignIn">
                                    <router-link to="/menusdetails">
                                        <a href="#popup" class="btn btn--2" @click="handleAddToCart(index)">Book now!</a>
                                    </router-link>
                                </div>
                                <div v-else>
                                    <a href="#popup" class="btn btn--2" @click="handleAddToCart(index)">Book now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        
        
        

    </div>
</template>
<script>
import { mapState,mapActions,mapGetters } from 'vuex';

export default {
    name:'MenusDetails',
    data(){
        return{
            mealDetails:[],
            categories:[
                        {type:'starter'},
                        {type:'chicken'},
                        {type:'salmon'},
                        {type:'beef'},
                        {type:'pork'},
                        {type:'seafood'},
                        {type:'pasta'},
                        {type:'lamb'},
                        {type:'dessert'}
            ]
        }
    },
    mounted(){
        window.addEventListener('scroll',this.fixedNav,true);
    },
    created() {
        this.getMealData(this.categories[1]);
    },
    methods:{
        ...mapActions(['signIn','signOut']),
        userSignOut(){
            this.$store.dispatch('logout');
            localStorage.removeItem('token');
            // this.$store.dispatch('user',null);  laravel後臺登入
            this.$router.push('/index');
            this.$store.dispatch('gSignin/signOut');
        },
        async getMealData(category){
            const dataUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.type}`;
            try{
                const response = await fetch(dataUrl);
                //console.log(response);
                const data = await response.json();
                this.mealDetails = data.meals;
            }catch(e){
                console.log(e);
            }
        },
        menuName(category){
            console.log(category.type)
            this.getMealData(category);
        },
        fixedNav(){
            const nav = document.querySelector('.menusdetails__nav');
            const topOfNav = nav.offsetTop;
            
            if(window.scrollY+100 >= topOfNav){
                //console.log(window.scrollY >= topOfNav)
                nav.classList.add('fixed-nav');
            }else{
                nav.classList.remove('fixed-nav');
            }
        },
        dropdownCategory(){
            //console.log('enter')
            //console.log(this)
            const background = document.querySelector('.menusdetails__dropdownBackground');
            const nav = document.querySelector('.menusdetails__nav');
            const category = document.querySelector('.menusdetails__category');

            category.classList.add('trigger-enter');
            
            setTimeout(() => {
                if(category.classList.contains('trigger-enter')){
                    category.classList.add('trigger-enter-active');
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
            
        }
    },
    computed:{
        ...mapState({
            signedIn: state => state.gSignin.signedIn,
            profile: state => state.gSignin.profile
        }),
        // ...mapGetters(['user','menus','menuList'])  laravel後臺登入
        ...mapGetters(['isSignIn','menus','menuList']),
        
    }
}
</script>

<style>

</style>