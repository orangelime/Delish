<template>
  <div class="home">
    <Navigation></Navigation>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    <Popup></Popup>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import Popup from '@/components/Popup'


export default {
  name: 'Home',
  components: {
    Header,
    Main,
    Footer,
    Navigation,
    Popup
  }
}
</script>
