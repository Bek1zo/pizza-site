<script setup lang="ts">
const route = useRoute()

const ShopCart = ref([])
const ShopCartSum = ref(null)

onMounted(() => {
  const storageCart = localStorage.getItem('ShopCart')
  const storageSum = localStorage.getItem('ShopCartSum')
  if (storageCart) {
    ShopCart.value = JSON.parse(storageCart)
    ShopCartSum.value = storageSum
  } else {
    localStorage.setItem('ShopCart', JSON.stringify([]))
    localStorage.setItem('ShopCartSum', JSON.stringify(0))
  }
})


const ShopCartCount = computed(() => {
  return ShopCart.value.length
})

provide("ShopCart", ShopCart)
provide("ShopCartCount", ShopCartCount)
provide("ShopCartSum", ShopCartSum)

</script>

<template>
  <Header/>
  <Advert/>
  <Product/>
  <Footer/>
</template>
