<template>
    <section class="section-menus" id="menus">
        <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">
                Most popular set menus
            </h2>
        </div>
        <div class="row">
            <div class="col-1-of-3" v-for="menu in menus" :key="menu.id">
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
                            <!-- <div v-if="signedIn || isSignIn">
                                <router-link to="/menusdetails">
                                    <a href="#popup" :class="[`btn btn--${menu.id}`]" @click="handleAddToCart(index)">Book now!</a>
                                </router-link>
                            </div>
                            <div v-else>
                                <a href="#popup" :class="[`btn btn--${menu.id}`]" @click="handleAddToCart(index)">Book now!</a>
                            </div> -->
                            <router-link to="/meals" :class="[`btn btn--${menu.id}`]" @click="handleAddToCart(index)">view menus</router-link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="u-center-text u-margin-bottom-huge">
            <router-link to="/meals" class="btn btn--white">Discover all menus</router-link>
        </div>
    </section>
</template>

<script>
import { mapState,mapGetters } from 'vuex';

export default {
    name:"Menus",
    methods: {
        handleAddToCart(index){
            this.$store.commit('menuList',this.$store.getters.menus[index].price);
        },

    },
    computed:{
        ...mapState({
            signedIn: state => state.gSignin.signedIn,
        }),
        // ...mapGetters(['user','menus'])
        ...mapGetters(['isSignIn','menus'])
    }
    
}
</script>

<style>

</style>