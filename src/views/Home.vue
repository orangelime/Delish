<template>
  <div class="home">
    
    <Navigation></Navigation>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    <Popup></Popup>
    
    
  </div>
</template>

<script>
import Header from '@/components/Header';
import Main from '@/components/Main'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import Popup from '@/components/Popup'
import axios from 'axios'


export default {
  name: 'Home',
  components: {
    Header,
    Main,
    Footer,
    Navigation,
    Popup
  },
  // data(){
  //     return{
  //         user:null
  //     }
  // },
  // async created(){
  //     const response = await axios.get('user');
  //     // this.user = response.data;
  //     this.$store.dispatch('user',response.data);
  //     console.log(response.data);
  // },
  mounted(){
    if (localStorage.getItem("token")) {
      axios
        .get( "user")
        .then(response => {
          this.$store.dispatch('user',response.data);
        })
        .catch(() => {
          localStorage.removeItem("token");
        });

    }

    
  }
    
}
</script>
