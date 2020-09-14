<template>
    <div class="popup" id="popup">
        <div class="popup__content">
            <div class="popup__left">
                <form action="#" class="form">
                    <div class="u-margin-bottom-medium">
                        <h2 class="heading-secondary">
                            Start Booking now
                        </h2>
                    </div>
                    <div class="form__group">
                        <img class="form__icon form__icon-1" alt="email icon"  src="../assets/img/email.png">
                        <input type="email" class="form__input" id="email" placeholder="Email address" required>
                        <label for="email" class="form__label">Email address</label>
                    </div>
                    <div class="form__group">
                        <img class="form__icon form__icon-1" alt="lock icon"  src="../assets/img/padlock.png">
                        <input type="password" class="form__input" id="name" placeholder="password" required>
                        <label for="password" class="form__label">Password</label>
                    </div>
                    <div class="form__text u-margin-bottom-medium">
                        <h3 class="heading-tertiary--normal">
                            Don't have an account?
                            <a href="#">Sign Up</a>
                        </h3>
                    </div>
                    <div class="form__group">
                        <a href="#popup" class="btn btn--signin btn--signin-1">Sign In &rarr;</a>
                    </div>  
                    <div class="form__group">
                        <a href="#popup" class="btn btn--signin btn--signin-2">Sign In with Google &rarr;</a>
                        <img class="form__icon form__icon-2" alt="Google icon"  src="../assets/img/google-icon.png">
                    </div>   
                    
                </form>
            </div>
            <div class="popup__right">
                <a href="#" class="popup__close">&times;</a>
                <div class="popup__logo-box">
                    <div class="popup__logo">
                        <img srcset="../assets/img/logo-1x.png 1x,../assets/img/logo-2x.png 2x" alt="Full logo" class="footer__logo" src="../assets/img/logo-2x.png">
                    </div>
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