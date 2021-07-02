<template>
    <div class="shoppingcart">

        <!-- signin header -->
        <div class="shoppingcart__header">
            <div class="header__logo-box">
                <router-link to="/index">
                    <img class="header__logo" src="../assets/img/logo-white.png" alt="Logo">
                </router-link>
            </div>
            <div class="shoppingcart__welcome-content">
                <!-- google signIn -->
                <div class="shoppingcart__welcome-box" v-if="signedIn">
                    <div class="shoppingcart__welcome-box--left">
                        <div class="shoppingcart__welcome-text">
                            <p class="shoppingcart__welcome-text-1">Welcome &emsp;</p>
                            <p class="shoppingcart__welcome-text-2">{{profile.getEmail()}}</p>
                        </div>
                    </div>
                    <div class="shoppingcart__welcome-box--right">
                        <a class="btn btn--white btn--animated" @click="userSignOut">Sign out</a>
                    </div>
                </div>
                <!-- user signin -->
                <div class="shoppingcart__welcome-box" v-else-if="user"> 
                    <div class="shoppingcart__welcome-box--left">
                        <div class="shoppingcart__welcome-text">
                            <p class="shoppingcart__welcome-text-1">Welcome &emsp;</p>
                            <p class="shoppingcart__welcome-text-2">{{user.name}}</p>
                        </div>
                    </div>
                    <div class="shoppingcart__welcome-box--right">
                        <a class="btn btn--white btn--animated" @click="userSignOut">Sign out</a>
                    </div>
                </div>
                <div class="shoppingcart__welcome-box" v-else>
                    <div class="shoppingcart__welcome-box--left shoppingcart__welcome-box--left-1">
                        <h1 class="heading-primary u-margin-top-small">
                            Welcome
                        </h1>
                    </div>
                    <div class="shoppingcart__welcome-box--right">
                        <router-link to="/signin" class="btn btn--white btn--animated">Sign in</router-link>
                    </div>
                </div>
            </div>
            <div class="header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--sub u-margin-top-giant">Finalize your reservation</span>
                </h1>
            </div>
        </div>
        
        <!-- select menu -->
        <div class="row row--1">
            <div class="col-1-of-2">
                <div class="shoppingcart__content shoppingcart__content--left">
                    <div class="shoppingcart__detail">
                        <h3 class="heading-secondary heading-secondary--1 u-margin-bottom-small">
                            Appetizer
                        </h3>
                        <div v-for="primary in appetizers" :key="primary.id">
                            <input type="checkbox" :id="primary.name"
                                    :value="primary.name"
                                    v-model="Appetizer"
                                    :checked="appetizers.checked">
                            <label :for="primary.id">
                                {{primary.name}}
                            </label>
                        </div>
                    </div>
                    <div class="shoppingcart__detail">
                        <h3 class="heading-secondary heading-secondary--1 u-margin-bottom-small">
                            Main Course
                        </h3>
                        <div v-for="secondary in maincourses" :key="secondary.id">
                            <input type="checkbox" :id="secondary.name"
                                    :value="secondary.name"
                                    v-model="Maincourse">
                            <label :for="secondary.id">
                                {{secondary.name}}
                            </label>
                        </div>
                    </div>
                    <div class="shoppingcart__detail">
                        <h3 class="heading-secondary heading-secondary--1 u-margin-bottom-small">
                            Dessert
                        </h3>
                        <div v-for="tertiary in desserts" :key="tertiary.id">
                            <input type="checkbox" id="tertiary"
                                    :value="tertiary.name"
                                    v-model="Dessert">
                            <label :for="tertiary.id">
                                {{tertiary.name}}
                            </label>
                        </div>
                    </div>
                </div> 
            </div>

            <!--reservation-->
            <div class="col-1-of-2">
                <div class="shoppingcart__content shoppingcart__content--right">
                    <div class="shoppingcart__basket">
                        <div class="shoppingcart__table">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span class="heading-secondary heading-secondary--1 u-padding-top-small">
                                                Your Basket 
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span class="heading-secondary heading-secondary--1">
                                                Family Dinner 
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td class="title">Appetizers</td>
                                    </tr>
                                    <tr v-for="appetizer in Appetizer" :key="appetizer.id">
                                        <td>{{appetizer}}</td>
                                    </tr>
                                    <tr>
                                        <td class="title">Main Courses</td>
                                    </tr>
                                    <tr v-for="maincourse in Maincourse" :key="maincourse.id">
                                        <td>{{maincourse}}</td>
                                    </tr>
                                    <tr>
                                        <td class="title">Dessert</td>
                                    </tr>
                                    <tr v-for="dessert in Dessert" :key="dessert.id">
                                        <td>{{dessert}}</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td class="title">Total Price</td>
                                    </tr>
                                    <tr>
                                        <td v-if="menuList">${{menuList}}</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td class="title">A change to make to the menu?</td>
                                    </tr>
                                    <tr>
                                        <textarea 
                                            class="textarea"
                                            placeholder="Here you can indicate your cooking preferences, allergies, menu changes(change a dish,etc.)">
                                        </textarea>
                                    </tr>
                                    <tr>
                                        <button type="submit" class="btn btn--signin btn--signin-1">
                                            book this service now &rarr;
                                        </button>
                                    </tr>
                                    <tr>
                                        <p class="warning-box">please correct the above errors.</p>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
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
import { mapState,mapActions,mapGetters } from 'vuex';

export default {
    name:'Shoppingcart',
    data(){
        return{
            appetizers:[
                {name:'Revisits leek vinaigrette, tangy applesauce, kiwi, horseradish, grilled buckwheat',checked:true},
                {name:'Beetroot in a salt crust, multicolored beetroot tartare, tarragon labne, hazelnuts'},
                {name:'Marrowbone, citrus zest, pickles, pickles, salad, toast'},
                {name:'Roasted Camembert, walnut crumble, wild herbs'},
                {name:'Salmon gravlax tartare, horseradish cream, fried capers, cucumber veil'}
            ],
            Appetizer:[],
            maincourses:[
                {name:'Cod like fish and chips, tartar sauce, lemon braised endive, endive sprouts'},
                {name:'Black pudding, mashed potato, apple sauce, white onion petals, apple chips, onion foam'},
                {name:'Lamb tandori, rice with spices and dried fruits, yogurt sauce, cucumber'},
                {name:'Beef steak, béarnaise with eggplant caviar, potato leaf, candied shallot'},
                {name:'Salmon tartare, horseradish cream, fried capers, cucumber veil'},
                {name:'Salmon gravlax tartare, horseradish cream, fried capers'},
                {name:'Horseradish cream, fried capers, cucumber veil'}
            ],
            Maincourse:[],
            desserts:[
                {name:'Candied bananas with spices, rum ice cream, scrunchies'},
                {name:'Brioche perdue, chestnut whipped cream, orange tartare, dried orange'},
                {name:'Faisselle, mountain cream, blueberry coulis, wild blueberry'},
                {name:'Confit apple, thick fir-smoked cream, gingerbread crumble, cider vinaigrette'}
            ],
            Dessert:[],
            
        }
    },
    methods:{
        ...mapActions(['signIn','signOut']),
        userSignOut(){
            // this.$store.dispatch('logout');
            localStorage.removeItem('token');
            this.$store.dispatch('user',null);
            this.$router.push('/index');
            this.$store.dispatch('gSignin/signOut');
        }
    },
    computed:{
        ...mapState({
            signedIn: state => state.gSignin.signedIn,
            profile: state => state.gSignin.profile
        }),
        // ...mapGetters(['isSignIn']),
        ...mapGetters(['user','menus','menuList'])
    }
}
</script>

<style>

</style>