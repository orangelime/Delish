<template>
    <header class="header">
        <div class="header__logo-box">
            <img class="header__logo" src="../assets/img/logo-white.png" alt="Logo">
        </div>
        <div class="header__text-box">
            <h1 class="heading-primary">
                <span class="heading-primary--main">DELISH </span>
                <span class="heading-primary--sub">delish dream dish</span>
            </h1>
            <router-link to="/meals" class="btn btn--white btn--animated">view menus</router-link>
        </div>
    </header>
</template>

<script>

export default {
    name:'Header',
}
</script>

<style>

</style>