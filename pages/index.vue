<script setup lang="ts">
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
  <Header/>
  <Advert/>
  <Product/>
  <Footer/>
</template>
