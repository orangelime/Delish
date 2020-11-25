<template>
    <div class="popup" id="popup">
        <div class="popup__content">
            <div class="popup__dialog">
                <a href="#" class="popup__close">&times;</a>
                <div class="popup__box">
                    <div class="popup__logobox">
                        <img class="popup__logo" src="../assets/img/logo-white.png" alt="Logo">
                    </div>
                    <div class="popup__text">
                        <h1 class="popup__heading">
                            Join our member
                        </h1>
                        <h1 class="popup__heading popup__heading-1">
                            20% off the unlimited first purchase amount
                        </h1>
                    </div>
                </div>
            </div>
            <div class="popup__button">
                <div class="popup__button-left">
                    <router-link to="/signin" class="btn btn--popup btn--animated">SignIn</router-link>
                </div>
                <div class="popup__button-right">
                    <router-link to="/shoppingcart" class="btn btn--popup btn--popup-1 btn--animated">ShoppingCart</router-link>
                </div>
            </div>
        </div>
      
    </div>
</template>

<script>
export default {
    name:'Popup',
}
</script>

<style>

</style>