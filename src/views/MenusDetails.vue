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
                    <span class="heading-primary--sub u-margin-top-giant">Finalize your reservation</span>
                </h1>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'MenusDetails',
}
</script>

<style>

</style>