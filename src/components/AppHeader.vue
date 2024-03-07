<script>

import { store } from "../store.js";

export default {
  data(){
    return{
        store,
    }
  }
}

</script>
<template lang="">

    <header>
        <div class="container ">
            <div class="row p-2">
                <div class="col-4 my-2">
                    <img src="/img/auto.jpg" class="logo-sito">
                    BOOL-CARS
                </div>
                <div class="col-8">
                    <div class="float-end"> 
                        <ul class="list-unstyled d-flex align-items-center gap-4 mt-4">
                            <li v-for="item, index in store.menuItems" :key="index">
                                <router-link :to="{ name: item.name }"> {{ item.label }}</router-link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
    
<style  lang="scss" scoped>

header{
    background-color: rgb(81, 81, 247);
    padding: 10px;

}
a{
    text-decoration: none;
    color: black
}
a:hover{
    color: red
}    
.logo-sito{
    width: 120px
}
</style>
    