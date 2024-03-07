<script>
import { store } from "../store.js"
import axios from "axios";

export default {
    name: "SingleCar",

    data(){
        return {
            store,
            car: null,
            loader: false,
        }
    },
    created(){
        this.getCarInfo();
    },
    methods:{
        getCarInfo(){
            axios.get(`${this.store.baseUrl}/api/cars/${this.$route.params.id}`)
            .then((response) => {
               
                this.car = response.data.car;
                this.loader = true;
               
            })
        }
    }
}

</script>
<template lang="">
    <div class="container" v-if="loader">
        
        <div class="row">
            <div class="col-4 m-5">
              
                    <h1> Marca: </h1>  {{ car.marca }}
                    <h1> Modello: </h1> {{ car.modello }}
                    <h1> Prezzo</h1> {{ car.prezzo }}€
                    <img :src="`${this.store.baseUrl}/storage/${car.cover_image}`" class="my-3">  
                  
                    
            </div>
            
            <div class="col-4 m-5">
                <h1> Alimentazione:</h1>  {{ car.alimentazione }}
                    <h1> Anno: </h1> {{ car.anno }}                        
                    <h1> Casa automobilistica </h1>{{ car.carhouse.name}}                        
                    <h1> Lista optional: </h1>
                    <ul class="list-unstyled">
                        <li v-for="optional, index in car.optionals" >
                            {{ optional.name}}
                        </li>
                    </ul>
            </div>
        </div>
    </div>
</template>
    
<style  lang="scss" scoped>
   img{
    width: 400px;
   }
</style>
    