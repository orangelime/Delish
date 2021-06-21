<template>
    <div class="signin">
        <div class="header__logo-box">
            <router-link to="/index">
                <img class="header__logo" src="../assets/img/logo-white.png" alt="Logo">
            </router-link>
        </div>
        <div class="signin__content">
            <div class="signin__left">
                <form action="#" class="form" @submit.prevent="userResetPassword">
                    <div class="u-center-text u-margin-bottom-medium">
                        <h2 class="heading-secondary">
                            Reset Password
                        </h2>
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
                    <div class="form__group">
                        <button type="submit" class="btn btn--signin btn--signin-1">
                            Submit &rarr;
                        </button>
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
import axios from 'axios';

export default {
    name:'ResetPassword',
    data(){
        return{
            password:'',
            password_confirm:''
        }
    },
    methods:{
        async userResetPassword(){
            const response = await axios.post('reset',{
                password:this.password,
                password_confirm:this.password_confirm,
                token:this.$route.params.token
            });
            console.log(response);
            this.$router.push('/signin');
        }
    }
}
</script>