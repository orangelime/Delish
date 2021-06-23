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
                    <!-- error -->
                    <transition name="slide">
                        <Error v-if="error" :error="error"></Error>
                    </transition>
                    
                    <div class="u-center-text u-margin-bottom-medium">
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
                            <router-link to="/signup">Sign Up</router-link>
                        </h3>
                    </div>
                    <div class="form__text u-margin-bottom-medium">
                        <router-link to="/forgot"><h3 class="heading-tertiary--normal">
                            Forgot password?
                            
                        </h3></router-link>
                    </div>
                    <div class="form__group">
                        <button type="submit" class="btn btn--signin btn--signin-1">
                            Sign In &rarr;
                        </button>
                    </div>  
                    <div class="form__group">
                        <!--<g-signin-button
                            :params="googleSignInParams"
                            @success="googleSignInSuccess"
                            @error="googleSignInError">
                            <a href="#" class="btn btn--signin btn--signin-2">Sign In with Google &rarr;</a>
                            <img class="form__icon form__icon-2" alt="Google icon"  src="../assets/img/google-icon.png">
                        </g-signin-button>-->
                        <a href="#" class="btn btn--signin btn--signin-2" @click="googleSignIn">Sign In with Google &rarr;</a>
                        <img class="form__icon form__icon-2" alt="Google icon"  src="../assets/img/google-icon.png">
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
import Error from '@/components/Error';
import axios from 'axios';
import { mapState } from 'vuex';

export default {
    name:'Signin',
    data(){
        return {
            email:null,
            password:null,
            error:''
        }
    },
    components:{
        Error
    },
    computed: {
        ...mapState({
            signedIn: state => state.gSignin.signedIn,
            profile: state => state.gSignin.profile
        })
    },
    methods:{
        // userSignIn(){
        //     if(this.email == '1234@email.com' && this.password == '1234'){
        //         this.$store.dispatch('login');
        //     }else{
        //         alert("login failed");
        //     }
        // },
        async userSignIn(){
            try{
                const response = await axios.post('login',{
                    email:this.email,
                    password:this.password
                });
                // console.log(response);
                localStorage.setItem('token',response.data.token);
                this.$store.dispatch('user',response.data.user);
                this.$router.push('/index');
            }catch(e){
                this.error = 'Invalid username/password!'
            }
        },
        googleSignIn(){
            this.$store.dispatch('gSignin/signIn');
        }
        
    }
}
</script>

<style>

</style>