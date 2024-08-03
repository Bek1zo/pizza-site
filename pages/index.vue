<script setup lang="ts">
import Product from "../components/Product.vue";

const route = useRoute()
</script>

<template>
  <div class="flex flex-col justify-center items-center m-auto w-full mt-5 gap-10">
    <Header/>
    <Advert/>
    <Product/>
  </div>

</template>
