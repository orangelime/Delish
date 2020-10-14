<template>
    <div class="navigation" >
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" >
        <label for="navi-toggle" class="navigation__button">
            <span class="navigation__icon">&nbsp;</span>
        </label>
        <div class="navigation__background">&nbsp;</div>
        <nav class="navigation__nav">
            <ul class="navigation__list">
                <li class="navigation__item" v-if="isSignIn"><a href="#" class="navigation__link"  @click="userSignOut"><span>01</span>Sign out</a></li>
                <li class="navigation__item" v-else><router-link to="/signin" class="navigation__link"  @click="selectNavItem"><span>01</span>Sign in</router-link></li>
                <li class="navigation__item"><a href="#about" class="navigation__link"  @click="selectNavItem"><span>02</span>About Delish</a></li>
                <li class="navigation__item"><a href="#benefits" class="navigation__link"  @click="selectNavItem"><span>03</span>Your benefits</a></li>
                <li class="navigation__item"><a href="#menus" class="navigation__link"  @click="selectNavItem"><span>04</span>Popular menus</a></li>
                <li class="navigation__item"><a href="#stories" class="navigation__link"  @click="selectNavItem"><span>05</span>Stories</a></li>
                <li class="navigation__item"><a href="#joinus" class="navigation__link"  @click="selectNavItem"><span>06</span>Join us</a></li>
                <li class="navigation__item"><router-link to="/shoppingcart" class="navigation__link"  @click="selectNavItem"><span>07</span>Shopping Cart</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name:'Navigation',
    data(){
        return{
            
        }
    },
    methods:{
        selectNavItem(){
            document.getElementById("navi-toggle").checked = false;
        },
        userSignOut(){
            this.$store.dispatch('logout');
            this.selectNavItem();
        }
    },
    computed:mapGetters(['isSignIn']),
}
</script>

<style>

</style>