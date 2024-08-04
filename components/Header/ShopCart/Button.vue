<script setup lang="ts">
const ShopCartCount = inject("ShopCartCount")
const ShopCartVisible = inject("ShopCartVisible")
</script>

<template>
  <div @click="ShopCartVisible = !ShopCartVisible" class="cursor-pointer flex gap-2 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
    <div>
      Корзина
    </div>
    <div v-if="ShopCartCount > 0">
      ({{ ShopCartCount }})
    </div>
  </div>
</template>

<style scoped>

</style>