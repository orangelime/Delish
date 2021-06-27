<template>
    <main>
        <section class="section-about" id="about">
            <div class="u-center-text u-margin-bottom-big">
                <h2 class="heading-secondary">
                    Regardless of the dishes, we cook at your home
                </h2>
            </div>
            <div class="row">
                <div class="col-1-of-2">
                    <h3 class="heading-tertiary u-margin-bottom-small">You're going to fall in love with delish</h3>
                    <p class="paragraph">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis quasi repellendus dignissimos libero reprehenderit tempore inventore laborum? Reprehenderit tenetur ut porro illum eveniet, sit necessitatibus. Laboriosam autem assumenda aut nostrum!
                    </p>
                    <h3 class="heading-tertiary u-margin-bottom-small">Arrange anything everywhere</h3>
                    <p class="paragraph">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore commodi cumque, quisquam minus quas quaerat beatae aliquid perspiciatis fuga.
                    </p>
                    <a href="#" class="btn-text">
                        Learn more &rarr;
                    </a>
                </div>
                <div class="col-1-of-2">
                    <div class="composition">
                        <img srcset="../assets/img/del-1.jpg 300w, ../assets/img/del-1-large.jpg 1000w"
                            sizes=" (max-width:56.25em) 20vw,
                                    (max-width:37.5em) 30vw,
                                    300px "
                                    alt="Photo 1" 
                                    class="composition__photo composition__photo--p1"
                                    src="../assets/img/del-1-large.jpg">
                        <img srcset="../assets/img/del-2.jpg 300w, ../assets/img/del-2-large.jpg 1000w"
                            sizes=" (max-width:56.25em) 20vw,
                                    (max-width:37.5em) 30vw,
                                    300px "
                                    alt="Photo 2" 
                                    class="composition__photo composition__photo--p2"
                                    src="../assets/img/del-2-large.jpg">
                        <img srcset="../assets/img/del-3.jpg 300w, ../assets/img/del-3-large.jpg 1000w"
                            sizes=" (max-width:56.25em) 20vw,
                                    (max-width:37.5em) 30vw,
                                    300px "
                                    alt="Photo 3" 
                                    class="composition__photo composition__photo--p3"
                                    src="../assets/img/del-3-large.jpg">
                        <!--<img src="../assets/img/nat-1-large.jpg" alt="Photo 1" class="composition__photo composition__photo--p1">
                        <img src="../assets/img/nat-2-large.jpg" alt="Photo 2" class="composition__photo composition__photo--p2">
                        <img src="../assets/img/nat-3-large.jpg" alt="Photo 3" class="composition__photo composition__photo--p3">-->
                    </div>
                </div>
            </div>
        </section>
        <Features></Features>
        <Menus></Menus>
        <Stories></Stories>
        <Joinus></Joinus>
    </main>
</template>

<script>
import Features from '@/components/Features';
import Menus from '@/components/Menus';
import Stories from '@/components/Stories';
import Joinus from '@/components/Joinus';

export default {
    name:"Main",
    components:{
        Features,
        Menus,
        Stories,
        Joinus
    }
}
</script>

<style>

</style>