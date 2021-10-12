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
            <ul class="menusdetails__list">
                <li class="menusdetails__name">
                    <a href="#" class="heading-secondary heading-secondary--1">
                        Appetizer
                    </a>
                </li>
                <li class="menusdetails__name">
                    <a href="#" class="heading-secondary heading-secondary--1">
                        Main Course
                    </a>
                </li>
                    <!-- <ul class="menusdetails__category">
                        <li class="menusdetails__name menusdetails__name-1">
                            <a href="#" class="heading-secondary heading-secondary--2">
                                Chicken
                            </a>
                        </li>
                        <li class="menusdetails__name menusdetails__name-1">
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
                        </li>
                    </ul> -->
                <li class="menusdetails__name">
                    <a href="#" class="heading-secondary heading-secondary--1">
                        Dessert
                    </a>
                </li>
            </ul>
        </nav> 
            
        <!-- menus details -->
        <div class="menusdetails__content">
            <div class="row">
                <div class="col-1-of-3" v-for="(menu,index) in menus" :key="menu.id">
                    <div class="card">
                        <div class="card__side card__side--front">
                            <div :class="[`card__picture card__picture--${menu.id}`]">
                                &nbsp;
                            </div>
                            <h4 class="card__heading">
                                <span :class="[`card__heading-span card__heading-span--${menu.id}`]">
                                    {{menu.name}}
                                </span>
                            </h4>
                            <div class="card__details">
                                <ul>
                                    <li>{{menu.details.people}}</li>
                                    <li>{{menu.details.appetizers}}</li>
                                    <li>{{menu.details.salad}}</li>
                                    <li>{{menu.details.main_course}}</li>
                                    <li>{{menu.details.dessert}}</li>
                                </ul>
                            </div>
                            
                        </div>
                        <div :class="[`card__side card__side--back card__side--back-${menu.id}`]">
                            <div class="card__cta">
                                <div class="card__price-box">
                                    <p class="card__price-only">Only</p>
                                    <p class="card__price-value">${{menu.price}}</p>
                                </div>
                                <!-- 如果已signin就直接進入購物車，未signin就跳出popup -->
                                <div v-if="signedIn || isSignIn">
                                    <router-link to="/menusdetails">
                                        <a href="#popup" :class="[`btn btn--${menu.id}`]" @click="handleAddToCart(index)">Book now!</a>
                                    </router-link>
                                </div>
                                <div v-else>
                                    <a href="#popup" :class="[`btn btn--${menu.id}`]" @click="handleAddToCart(index)">Book now!</a>
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
    methods:{
        ...mapActions(['signIn','signOut']),
        userSignOut(){
            this.$store.dispatch('logout');
            localStorage.removeItem('token');
            // this.$store.dispatch('user',null);  laravel後臺登入
            this.$router.push('/index');
            this.$store.dispatch('gSignin/signOut');
        }
    },
    computed:{
        ...mapState({
            signedIn: state => state.gSignin.signedIn,
            profile: state => state.gSignin.profile
        }),
        // ...mapGetters(['user','menus','menuList'])  laravel後臺登入
        ...mapGetters(['isSignIn','menus','menuList'])
    }
}
</script>

<style>

</style>