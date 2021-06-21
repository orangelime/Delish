<template>
    <div class="signup">
        <div class="header__logo-box">
            <router-link to="/index">
                <img class="header__logo" src="../assets/img/logo-white.png" alt="Logo">
            </router-link>
        </div>
        <div class="signup__content">
            <div class="signup__box">
                <form action="#" class="form" @submit.prevent="userSignUp">
                    <!-- error -->
                    <transition name="slide">
                        <Error v-if="error" :error="error"></Error>
                    </transition>
                    
                    <div class="u-center-text u-margin-bottom-medium">
                        <h2 class="heading-secondary">
                            Create My Account
                        </h2>
                    </div>
                    <div class="form__group">
                        <img class="form__icon form__icon-3" alt="user icon"  src="../assets/img/user.png">
                        <input type="text" class="form__input" id="text" v-model="name" placeholder="username" required>
                        <label for="text" class="form__label">Username</label>
                    </div>
                    <div class="form__group">
                        <img class="form__icon form__icon-3" alt="email icon"  src="../assets/img/email.png">
                        <input type="email" class="form__input" id="email" v-model="email" placeholder="Email address" required>
                        <label for="email" class="form__label">Email address</label>
                    </div>
                    <div class="form__group">
                        <img class="form__icon form__icon-3" alt="lock icon"  src="../assets/img/padlock.png">
                        <input type="password" class="form__input" id="password" v-model="password" placeholder="password" required>
                        <label for="password" class="form__label">Password</label>
                    </div>
                    <div class="form__group">
                        <img class="form__icon form__icon-3" alt="lock icon"  src="../assets/img/padlock.png">
                        <input type="password" class="form__input" id="password_confirm" v-model="password_confirm" placeholder="confirm password" required>
                        <label for="password_confirm" class="form__label">Confirm Password</label>
                    </div>
                    <div class="form__text u-margin-bottom-medium">
                        <h3 class="heading-tertiary--normal">
                            Back to sign in
                            <router-link to="/signin">Sign In</router-link>
                        </h3>
                    </div>
                    <div class="form__group">
                        <button type="submit" class="btn btn--signin btn--signin-1">
                            Sign Up &rarr;
                        </button>
                    </div>  
                </form>
            </div>
        </div>   
    </div>
</template>

<script>
import axios from 'axios';
import Error from '@/components/Error'

export default {
    name:'Signup',
    data(){
        return {
            name:'',
            email:'',
            password:'',
            password_confirm:'',
            error:''
        }
    },
    components:{
        Error
    },
    methods:{
        async userSignUp(){
            try{
                // console.log(data);
                await axios.post('register',{
                        name:this.name,
                        email:this.email,
                        password:this.password,
                        password_confirm:this.password_confirm
                });
                // console.log(response);
                this.$router.push('/signin');
            }catch(e){
                this.error = 'Error occurred!';
            }
        
        }
    }
}
</script>

<style>

</style>
