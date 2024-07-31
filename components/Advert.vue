<script setup lang="ts">

const cards = ref([
  {
    id: 0,
    text: 'Текст карточки 1',
    image: '/carousel/image1.png'
  },
  {
    id: 1,
    text: 'Текст карточки',
    image: '/carousel/image1.png'},
  {
    id: 3,
    text: 'Текст карточки',
    image: '/carousel/image1.png'},
  {
    id: 4,
    text: 'Текст карточки',
    image: '/carousel/image1.png'
  },
])

</script>

<template>
  <div class="advert-wrapper flex flex-row gap-6">
    <div v-for="i in cards" class="w-60 h-96">
      <img :src="i.image" class="object-fill h-full cursor-pointer" alt="i.text">
    </div>
  </div>

</template>

<style scoped>

</style>