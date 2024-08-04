<script setup lang="ts">

const cards = ref([
  {
    id: 0,
    text: 'Как мы готовим наши продукты?',
    image: '/advert/food1.jpg'
  },
  {
    id: 1,
    text: 'Какие ингридиенты используем?',
    image: '/advert/food2.jpg'
  },
  {
    id: 3,
    text: 'Как мы поддерживаем уровень качества?',
    image: '/advert/food3.jpg'
  },
])

</script>

<template>
  <div class="advert-wrapper flex gap-4 flex-col md:flex-row justify-center items-center mt-28">
    <div v-for="item in cards" :key="item.id"
        class="cursor-pointer relative grid h-[25rem] w-full max-w-[20rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
      <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none text-gray-700 shadow-none">
        <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50">
          <img :src="item.image" alt="" class="h-full w-full object-cover">
        </div>
      </div>
      <div class="relative p-6 px-6 py-14 md:px-12">
        <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
          {{ item.text }}
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>