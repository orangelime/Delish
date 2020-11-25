<template>
    <header class="header">
        <div class="header__logo-box">
            <img class="header__logo" src="../assets/img/logo-white.png" alt="Logo">
        </div>
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
import { mapState,mapActions } from 'vuex'
export default {
    name:'Header',
    methods:mapActions(['signIn','signOut']),
    computed:{
        ...mapState({
            signedIn: state => state.gSignin.signedIn,
            profile: state => state.gSignin.profile
        }),
    }
}
</script>

<style>

</style>