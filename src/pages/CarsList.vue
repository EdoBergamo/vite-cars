<script>

import CarCard from "../components/CarCard.vue";
import { store } from "../store.js"
import axios from "axios";

export default {
    name: "CarsList",
    components: {
        CarCard
    },

    data(){
        return {
            store,
            cars: [],
            currentPage: 1,
            lastPage: null

        }
    },
    created(){
        this.getCars();
    },
    methods:{
        getCars(page_number){
            axios.get(`${this.store.baseUrl}/api/cars`,
            {
                params:{
                    page : page_number
                }
            }).then((response) => {
               this.cars = response.data.results.data;
               this.currentPage = response.data.results.current_page;
               this.lastPage = response.data.results.last_page;

            })
        }
    }
}

</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center my-3">

                <h1>Boolcars</h1>
                <h4>Raccolta delle auto </h4>
                <button class="btn btn-sm btn-primary mx-3" :class="currentPage == 1 ? `disabled` : ``" @click="getCars(currentPage - 1)">Indietro</button>
                <button class="btn btn-sm btn-primary"  :class="currentPage == lastPage ? `disabled` : ``" @click="getCars(currentPage + 1)">Avanti</button>
            </div>
        </div>        
        <div class="row">
            <CarCard v-for="car, index  in cars" :key="index" :car="car"/>
        </div>
    </div>
</template>
    
<style  lang="scss" scoped>

  
</style>