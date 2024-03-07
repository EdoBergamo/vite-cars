<script>
import { store } from "../store.js"
export default {
    name: "CarCard",
    props: {
        car: Object
    },
    data() {
        return {
            store
        }
    },
    methods:{
        getUrlImage(){
            let image;

            if(this.car.cover_image != null) {
                image = "/storage/" + this.car.cover_image;
            }
            else {
                image = "/img/placeholder.jpg"
            }

            return `${this.store.baseUrl}${image}`
            
        }
    }
    
}

</script>
<template lang="">
    <div class="col-lg-4 col-md-6 col-3 ">
        <router-link :to="{name: 'SingleCar', params: { id: car.id } }" class="text-deco" >
            <div class="card mt-4">
                <img :src="getUrlImage()" alt="" class="card-img-top">
                    <div class="card-body">
                        <h4> Nome Auto: </h4>{{ car.name }}
                        <h4 class="my-2"> Modello: </h4>{{ car.modello }}
                        
                        <h5 class="my-2"> Prezzo </h5>{{ car.prezzo }}€
                        
                       
                    </div>
                </div>
            </router-link> 
            </div>

   

</template>
    
<style  lang="scss" scoped>
    .card{
        height: 500px;
        background-color: azure
    }
    .text-deco{
        text-decoration: none;
    }
</style>
    