<script setup lang="ts">

const route = useRoute()

const ShopCart = ref([])
const ShopCartSum = ref(null)

onMounted(() => {
  const storageCart = localStorage.getItem('ShopCart')
  const storageSum = localStorage.getItem('ShopCartSum')
  if (storageCart) {
    ShopCart.value = JSON.parse(storageCart)
    ShopCartSum.value = JSON.parse(storageSum)
  } else {
    localStorage.setItem('ShopCart', JSON.stringify([]))
    localStorage.setItem('ShopCartSum', 0)
  }
})


const ShopCartCount = computed(() => {
  return ShopCart.value.length
})

provide("ShopCart", ShopCart)
provide("ShopCartCount", ShopCartCount)
provide("ShopCartSum", ShopCartSum)

const ShopCartVisible = ref(false)
provide("ShopCartVisible", ShopCartVisible)

const HeaderVisible = ref(false)
provide("HeaderVisible", HeaderVisible)

const HeaderRef = ref(null)

const { stop } = useIntersectionObserver(
    HeaderRef,
    ([{ isIntersecting }], observerElement) => {
      HeaderVisible.value = isIntersecting
    },
)

</script>

<template>
  <section ref="HeaderRef">
    <Header/>
    <Advert/>
  </section>
  <Product/>
  <Footer/>

</template>
