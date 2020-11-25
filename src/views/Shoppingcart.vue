<template>
    <div class="shoppingcart">
        <header class="header">
            <div class="header__logo-box">
                <router-link to="/index">
                    <img class="header__logo" src="../assets/img/logo-white.png" alt="Logo">
                </router-link>
                <div v-if="signedIn">
                    <p class="paragraph">Welcome {{profile.sV}}</p>
                    
                </div>
                <div v-else>
                    <p class="paragraph">Welcome</p>
                </div>
            </div>
            <div class="header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--sub">Finalize your reservation</span>
                </h1>
                
            </div>
        </header>
    </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
    name:'Shoppingcart',
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