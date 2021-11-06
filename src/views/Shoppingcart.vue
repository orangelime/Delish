<template>
    <div class="shoppingcart">

        <CommonHeader :title="title"></CommonHeader>
        
        <!-- select menu -->
        <div class="row">

            <!--reservation-->
            <div class="shoppingcart__content shoppingcart__content--right">
                <div class="shoppingcart__basket">
                    
                
                    
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
// var array = []
// var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

// for (var i = 0; i < checkboxes.length; i++) {
    
//     document.getElementById('result').innerText = array.push(checkboxes[i].value)
//     console.log(checkboxes);
// }
</script>
<script>
import CommonHeader from '@/components/CommonHeader';
import { mapState,mapActions,mapGetters } from 'vuex';

export default {
    name:'Shoppingcart',
    data(){
        return{
            title:'Finalize your reservation',
            
        }
    },
    components:{
        CommonHeader,
    },
    methods:{
        // ...mapActions(['signIn','signOut']),
        // userSignOut(){
        //     this.$store.dispatch('logout');
        //     localStorage.removeItem('token');
        //     // this.$store.dispatch('user',null);  laravel後臺登入
        //     this.$router.push('/index');
        //     this.$store.dispatch('gSignin/signOut');
        // }
    },
    computed:{
        // ...mapState({
        //     signedIn: state => state.gSignin.signedIn,
        //     profile: state => state.gSignin.profile
        // }),
        // // ...mapGetters(['user','menus','menuList'])  laravel後臺登入
        // ...mapGetters(['isSignIn','menus','menuList'])
    }
}
</script>

<style>

</style>