<script setup lang="ts">
import Product from "../components/Product.vue";

const route = useRoute()

onMounted(() => {
  const storageCart = localStorage.getItem('ShopCart')
  if (storageCart) {
    ShopCart.value = JSON.parse(storageCart)
  } else {
    localStorage.setItem('ShopCart', JSON.stringify([]))
  }
})

const ShopCart = ref([])

provide("ShopCart", ShopCart)

</script>

<template>
  <div class="flex flex-col justify-center items-center m-auto w-full mt-5 gap-10">
    <Header/>
    <Advert/>
    <Product/>
  </div>

</template>
