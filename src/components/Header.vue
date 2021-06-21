<template>
    <header class="header">
        <div class="header__logo-box">
            <img class="header__logo" src="../assets/img/logo-white.png" alt="Logo">
        </div>
        <!-- signedIn&login -->
        <div class="shoppingcart__welcome-content">
            <div class="shoppingcart__welcome-box" v-if="user">
                <div class="shoppingcart__welcome-box--left">
                    <div class="shoppingcart__welcome-text">
                        <p class="shoppingcart__welcome-text-1">Welcome &emsp;</p>
                        <p class="shoppingcart__welcome-text-2">{{user.name}}</p>
                    </div>
                </div>
            </div>
            <div class="shoppingcart__welcome-box" v-if="!user">
                <div class="shoppingcart__welcome-box--left shoppingcart__welcome-box--left-1">
                    <h1 class="heading-primary u-margin-top-small">
                        Welcome
                    </h1>
                </div>
            </div>
        </div>
        <!-- signedIn&login end -->
        <div class="header__text-box">
            <h1 class="heading-primary">
                <span class="heading-primary--main">DELISH </span>
                <span class="heading-primary--sub">delish dream dish</span>
            </h1>
            <a href="#section-menus" class="btn btn--white btn--animated">view menus</a>
        </div>
    </header>
</template>

<script>
// import axios from 'axios'
import { mapState,mapActions,mapGetters } from 'vuex'

export default {
    name:'Header',
    // props:['user'],
    // data(){
    //     return{
    //         user:null
    //     }
    // },
    // async created(){
    //     const response = await axios.get('user');
    //     this.user = response.data;
    //     console.log(response);
    // },
    // methods:mapActions(['signIn','signOut']),
    // computed:{
    //     ...mapState({
    //         signedIn: state => state.gSignin.signedIn,
    //         profile: state => state.gSignin.profile
    //     }),
    // }
    methods:{
        ...mapActions(['signIn','signOut']),
        userSignOut(){
            // this.$store.dispatch('logout');
            localStorage.removeItem('token');
            this.$store.dispatch('user',null);
            this.$store.dispatch('gSignin/signOut');
        }
    },
    computed:{
        ...mapState({
            signedIn: state => state.gSignin.signedIn,
            profile: state => state.gSignin.profile
        }),
        // ...mapGetters(['isSignIn']),
        ...mapGetters(['user'])
    }
}
</script>

<style>

</style>