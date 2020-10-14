<template>
    <div class="signin">
        
        <div class="header__logo-box">
            <router-link to="/index">
                <img class="header__logo" src="../assets/img/logo-white.png" alt="Logo">
            </router-link>
        </div>
        <div class="signin__content">
            <div class="signin__left">
                <form action="#" class="form" @submit.prevent="userSignIn">
                    <div class="u-margin-bottom-medium">
                        <h2 class="heading-secondary">
                            Start Booking now
                        </h2>
                    </div>
                    <div class="form__group">
                        <img class="form__icon form__icon-1" alt="email icon"  src="../assets/img/email.png">
                        <input type="email" class="form__input" id="email" v-model="email" placeholder="Email address" required>
                        <label for="email" class="form__label">Email address</label>
                    </div>
                    <div class="form__group">
                        <img class="form__icon form__icon-1" alt="lock icon"  src="../assets/img/padlock.png">
                        <input type="password" class="form__input" id="name" v-model="password" placeholder="password" required>
                        <label for="password" class="form__label">Password</label>
                    </div>
                    <div class="form__text u-margin-bottom-medium">
                        <h3 class="heading-tertiary--normal">
                            Don't have an account?
                            <a href="#">Sign Up</a>
                        </h3>
                    </div>
                    <div class="form__group">
                        <button type="submit" class="btn btn--signin btn--signin-1">
                            Sign In &rarr;
                        </button>
                    </div>  
                    <div class="form__group">
                        <g-signin-button
                            :params="googleSignInParams"
                            @success="googleSignInSuccess"
                            @error="googleSignInError">
                            <a href="#" class="btn btn--signin btn--signin-2">Sign In with Google &rarr;</a>
                            <img class="form__icon form__icon-2" alt="Google icon"  src="../assets/img/google-icon.png">
                        </g-signin-button>
                    </div>   
                    
                </form>
            </div>
            <div class="signin__right">
                <div class="signin__logo-box">
                    <div class="signin__logo">
                        <img srcset="../assets/img/logo-1x.png 1x,../assets/img/logo-2x.png 2x" alt="Full logo" class="footer__logo" src="../assets/img/logo-2x.png">
                    </div>
                </div>
            </div>
        </div>
    
    </div>
    
</template>

<script>
import GSignInButton from 'vue-google-signin-button';

export default {
    name:'Signin',
    data(){
        return {
            email:'',
            password:'',
            googleSignInParams: {
                client_id: '899612929482-t0i2u84nmh7pm9mj2fn6bu55b18sfngg.apps.googleusercontent.com'
            }
        }
    },
    methods:{
        userSignIn(){
            //let auth = true;
            if(this.email == '1234@email.com' && this.password == '1234'){
                this.$store.dispatch('login');
                console.log('login');
            }else{
                alert("login failed");
            }
        },
        googleSignInSuccess (googleUser) {
            const profile = googleUser.getBasicProfile();
            this.$router.push('/');
            console.log("yes");
        },
        googleSignInError (error) {
            console.log('OH NOES', error);
        }
    }
}
</script>

<style>

</style>