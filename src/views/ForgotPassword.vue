<template>
    <div class="signin">
        <div class="header__logo-box">
            <router-link to="/index">
                <img class="header__logo" src="../assets/img/logo-white.png" alt="Logo">
            </router-link>
        </div>
        <div class="signin__content">
            <div class="signin__left">
                <form action="#" class="form" @submit.prevent="userForgotPassword">
                    <!-- success message -->
                    <transition name="slide">
                        <div v-if="message" class="message-success">
                            <h3 class="heading-tertiary u-center-text message-text">
                                {{message}}
                            </h3>
                        </div>
                    </transition>
                    <!-- error -->
                    <transition name="slide">
                        <Error v-if="error" :error="error"></Error>
                    </transition>

                    <div class="u-center-text u-margin-bottom-medium">
                        <h2 class="heading-secondary">
                            Forgot Password
                        </h2>
                    </div>
                    <div class="form__group">
                        <img class="form__icon form__icon-1" alt="email icon"  src="../assets/img/email.png">
                        <input type="email" class="form__input" id="email" v-model="email" placeholder="Email address" required>
                        <label for="email" class="form__label">Email address</label>
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
import Error from '@/components/Error';
import axios from 'axios';

export default {
    name:'ForgotPassword',
    data(){
        return{
            email:'',
            message:'',
            error:''
        }
    },
    components:{
        Error
    },
    methods:{
        async userForgotPassword(){
            try{
                await axios.post('forgot',{
                    email:this.email
                });
                // console.log(response);
                this.message = 'The eamil was sent!';
                this.error = '';
            }catch(e){
                this.error = 'Error occurred!';
                this.message = '';
            } 
        }
    }
}
</script>