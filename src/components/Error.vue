<template>
        <div class="message-error">
            <h3 class="heading-tertiary u-center-text message-error__text">
                {{error}}
            </h3>
        </div>
</template>

<script>
export default {
    name:'Error',
    props:['error']
}
</script>

<style>

</style>