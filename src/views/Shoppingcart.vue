<template>
    <div class="shoppingcart">

        <CommonHeader :title="title"></CommonHeader>
        
        <!-- select menu -->
        <!-- <div class="row"> -->

            <!--reservation-->
            <div class="shoppingcart__content">
                <div class="shoppingcart__box">
                    <table class="shoppingcart__table">
                        <thead>
                            <tr>
                                <th colspan="5">Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in mealsCart" :key="item.index">
                                <div v-for="meal in item.mealDetails" :key="meal.idMeal">
                                    <td>
                                        <img class="popup__logo" :src=meal.strMealThumb :alt=meal.strMeal>
                                    </td>
                                    <td>
                                        <div class="u-center-text">
                                            <h3 class="heading-secondary">
                                                {{meal.strMeal}}
                                            </h3>
                                        </div>
                                    </td>
                                </div>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td colspan="3">Total <span class="total-price">$888</span></td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                    <button type="submit" class="btn btn--signin btn--signin-1">Book it!</button>
                </div>    
            </div>
        <!-- </div> -->
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
        
    },
    computed:{
        ...mapGetters(['mealsCart']),
        mealsInCart(){
            // let arr = this.mealsCart;
            // //console.log(arr.mealDetails)
            // for(let i=0;i<arr.length;i++){
            //     return arr[i].mealDetails;
            // }

            let dict = {};
            this.mealsCart.forEach(item => {
                dict[item.idMeal] = item;
            })
            return dict;

            
        }
    }
}
</script>

<style>

</style>