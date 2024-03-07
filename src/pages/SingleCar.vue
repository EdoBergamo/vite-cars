<script>
import { store } from "../store.js"
import axios from "axios";

export default {
    name: "SingleCar",

    data(){
        return {
            store,
            car: null
        }
    },
    created(){
        this.getCarInfo();
        console.log(getCarInfo)
    },
    methods:{
        getCarInfo(){
            axios.get(`${this.store.baseUrl}/api/cars/${this.$route.params.id}`)
            .then((response) => {
               this.car = response.data.car;
            })
        }
    }
}

</script>
<template lang="">
    <div>
      
    </div>
</template>
    
<style  lang="scss" scoped>
   
</style>
    