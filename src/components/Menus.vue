<template>
    <section class="section-menus" id="menus">
        <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">
                Most popular menus
            </h2>
        </div>
        <div class="row">
            <div class="col-1-of-3" v-for="menu in menus" :key="menu.id">
                <div class="card">
                    <div class="card__side card__side--front">
                        <div :class="['card__picture card__picture--' + menu.id]">
                            &nbsp;
                        </div>
                        <h4 class="card__heading">
                            <span :class="['card__heading-span card__heading-span--' + menu.id]">
                                {{menu.name}}
                            </span>
                        </h4>
                        <div class="card__details">
                            <ul>
                                <li>{{menu.details.people}}</li>
                                <li>{{menu.details.appetizers}}</li>
                                <li>{{menu.details.salad}}</li>
                                <li>{{menu.details.main_course}}</li>
                                <li>{{menu.details.dessert}}</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div :class="['card__side card__side--back card__side--back-' + menu.id]">
                        <div class="card__cta">
                            <div class="card__price-box">
                                <p class="card__price-only">Only</p>
                                <p class="card__price-value">{{menu.price}}</p>
                            </div>
                            <a href="#popup" :class="['btn btn--' + menu.id]">Book now!</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="col-1-of-3">
                <div class="card">
                    <div class="card__side card__side--front">
                        <div class="card__picture card__picture--2">
                            &nbsp;
                        </div>
                        <h4 class="card__heading">
                            <span class="card__heading-span card__heading-span--2">
                                Community dinner
                            </span>
                        </h4>
                        <div class="card__details">
                            <ul>
                                <li>Up to 12 people</li>
                                <li>Choice of 2 appetizers</li>
                                <li>Garlic Bread and Cheese</li>
                                <li>Choice of 3 main courses</li>
                                <li>Choice of 1 dessert</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div class="card__side card__side--back card__side--back-2">
                        <div class="card__cta">
                            <div class="card__price-box">
                                <p class="card__price-only">Only</p>
                                <p class="card__price-value">$1,688</p>
                            </div>
                            <a href="#popup" class="btn btn--yellow">Book now!</a>    
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- <div class="col-1-of-3">
                <div class="card">
                    <div class="card__side card__side--front">
                        <div class="card__picture card__picture--3">
                            &nbsp;
                        </div>
                        <h4 class="card__heading">
                            <span class="card__heading-span card__heading-span--3">
                                Food and party
                            </span>
                        </h4>
                        <div class="card__details">
                            <ul>
                                <li>Up to 20 people</li>
                                <li>Choice of 3 appetizers</li>
                                <li>Salmon Avocado Salad</li>
                                <li>Choice of 6 main courses</li>
                                <li>Choice of 3 dessert</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card__side card__side--back card__side--back-3">
                        <div class="card__cta">
                            <div class="card__price-box">
                                <p class="card__price-only">Only</p>
                                <p class="card__price-value">$2,688</p>
                            </div>
                            <a href="#popup" class="btn btn--purple">Book now!</a> 
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
        <div class="u-center-text u-margin-bottom-huge">
            <a href="#" class="btn btn--white">Discover all menus</a>
        </div>
    </section>
</template>

<script>
export default {
    name:"Menus",
    data(){
        return{
            menus:[
                {
                    id:1,
                    name:'family gathering',
                    price:'$888',
                    count:1,
                    details:{
                        people:'Up to 6 people',
                        appetizers:'Choice of 1 appetizers',
                        salad:'Classic Caesar Salad',
                        main_course:'Choice of 2 main courses',
                        dessert:'Special dessert'
                    }
                },
                {
                    id:2,
                    name:'commnunity gathering',
                    price:'$1688',
                    count:2,
                    details:{
                        people:'Up to 12 people',
                        appetizers:'Choice of 2 appetizers',
                        salad:'Garlic Bread and Cheese',
                        main_course:'Choice of 3 main courses',
                        dessert:'Choice of 1 dessert'
                    }
                },
                {
                    id:3,
                    name:'large dinner party',
                    price:'$2,688',
                    count:3,
                    details:{
                        people:'Up to 20 people',
                        appetizers:'Choice of 3 appetizers',
                        salad:'Salmon Avocado Salad',
                        main_course:'Choice of 6 main courses',
                        dessert:'Choice of 3 dessert'
                    }
                }
            ]
        }
        
    }
}
</script>

<style>

</style>