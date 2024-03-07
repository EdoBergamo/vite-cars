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
                image = "/storage/" + this.project.cover_image;
            }
            else {
                image = "/img/placeholder.png"
            }

            return `${this.store.baseUrl}${image}`
            
        }
    }
    
}

</script>
<template lang="">
    <div class="col-lg-4 col-md-6 col-3 ">
        <div class="card mt-4">
            <img :src="getUrlImage()" alt="" class="card-img-top">
                <div class="card-body">
                    <h4> Nome Auto: </h4>{{ car.name }}
                    <h4 class="my-2"> Modello: </h4>{{ car.modello }}
                    <h5 class="my-2"> Prezzo </h5>{{ Prezzo }} 
                    <!-- <h5 class = "my-2">Tipologia Progetto: </h5>{{ car.type.name}} <hr><hr> -->
                    <!-- <h5> {{ project.technologies}}</h5> -->
                </div>
            </div>
        </div>
   

</template>
    
<style  lang="scss" scoped>
    
</style>
    