<template>
    <div class="footer">
        <div class="footer__logo-box">
            <picture class="footer__logo">
                <source srcset="../assets/img/logo-small-1x.png 1x,../assets/img/logo-small-2x.png 2x" media="(max-width:37.5em)">
                <img srcset="../assets/img/logo-1x.png 1x,../assets/img/logo-2x.png 2x" alt="Full logo" class="footer__logo" src="../assets/img/logo-2x.png">
            </picture>
        </div>
        <div class="row">
            <div class="col-1-of-2">
                <div class="footer__navigation">
                    <ul class="footer__list">
                        <li class="footer__item"><a href="#about" class="footer__link">About</a></li>
                        <li class="footer__item"><a href="#benefits" class="footer__link">Benefits</a></li>
                        <li class="footer__item"><a href="#menus" class="footer__link">Menus</a></li>
                        <li class="footer__item"><a href="#stories" class="footer__link">Stories</a></li>
                        <li class="footer__item"><a href="#joinus" class="footer__link">Join us</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-1-of-2">
                <p class="footer__copyright">
                    Built my
                    <a href="#" class="footer__link">Jonas Schmedtmann</a>
                    for his online course
                    <a href="#" class="footer__link">Advanced CSS and SASS</a>
                    . Copyright &copy; by Jonas Schmedtmann<br/>
                    
                    <!--icon-->
                    Icons made by 
                    <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik </a>from 
                    <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a><br/>
                    Icons made by 
                    <a href="https://www.flaticon.com/authors/pongsakornred" title="pongsakornRed">pongsakornRed </a>from 
                    <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a><br/>
                    Icons made by 
                    <a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm </a>from 
                    <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

                </p>
                
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style>

</style>