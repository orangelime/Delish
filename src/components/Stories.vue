<template>
    <section class="section-stories" id="stories">
        <div class="bg-video">
            <video class="bg-video__content" autoplay muted loop>
                <source src="../assets/img/video.mp4" type="video/mp4">
                <source src="../assets/img/video.webm" type="video/webm">
                Your browser is not supported!
            </video>
        </div>
        <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">
                We make people genuinely happy
            </h2>
        </div>
        <div class="row">
            <div class="story">
                <figure class="story__shape">
                    <img srcset="../assets/img/del-8.jpg 300w, ../assets/img/del-8-large.jpg 2000w"
                            sizes=" (max-width:56.25em) 25vw,
                                    (max-width:37.5em) 70vw,
                                    300px "
                                    alt="Person" 
                                    class="story__img"
                                    src="../assets/img/del-8-large.jpg">
                    <figcaption class="story__caption">Mary Smith</figcaption>
                </figure>
                <div class="story__text">
                    <h3 class="heading-tertiary u-margin-bottom-small">
                        I had the best week ever with my family
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate omnis, earum, fugiat nobis, nisi nam aperiam pariatur illum neque nulla nesciunt quia expedita doloribus dolorem iste. Ratione, nihil laborum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate omnis, amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="story">
                <figure class="story__shape">
                    <img srcset="../assets/img/del-9.jpg 300w, ../assets/img/del-9-large.jpg 2000w"
                            sizes=" (max-width:56.25em) 25vw,
                                    (max-width:37.5em) 70vw,
                                    300px "
                                    alt="Person" 
                                    class="story__img"
                                    src="../assets/img/del-9-large.jpg">
                    <figcaption class="story__caption">Jack Wilson</figcaption>
                </figure>
                <div class="story__text">
                    <h3 class="heading-tertiary u-margin-bottom-small">
                        WOW!My life is completely different now!
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate omnis, earum, fugiat nobis, nisi nam aperiam pariatur illum neque nulla nesciunt quia expedita doloribus dolorem iste. Ratione, nihil laborum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate omnis, amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>
        <div class="u-center-text u-margin-bottom-huge">
            <a href="#" class="btn-text">Read all stories &rarr;</a>
        </div>
    </section>
</template>

<script>
export default {
    name:'Stories'
}
</script>

<style>

</style>