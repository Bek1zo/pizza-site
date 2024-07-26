<script setup lang="ts">

import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const rightSideMenu = ref(false)

const clickRightSideMenu = () => {
  rightSideMenu.value = !rightSideMenu.value
}

</script>

<template>
  <div>
    <ul v-if="width > 1024" class="flex gap-4 justify-end items-center md:visible invisible h-full font-robot-slab">
      <li class="cursor-pointer hover:text-one transition-colors delay-100">Меню</li>
      <li class="cursor-pointer hover:text-one transition-colors delay-100">Акции</li>
      <li class="cursor-pointer hover:text-one transition-colors delay-100">Бонусы</li>
      <li class="cursor-pointer hover:text-one transition-colors delay-100">Контакты</li>
      <li class="cursor-pointer hover:text-one transition-colors delay-100">Вход</li>
    </ul>
    <div v-else @click="clickRightSideMenu()" class="pt-4 pl-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="m-auto w-8 h-8" viewBox="0 0 50 50">
        <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
      </svg>
    </div>
  </div>

  <Transition>
  <div v-if="rightSideMenu" class="absolute h-full w-full top-0 right-0 bg-one">
    <div @click="clickRightSideMenu()" class="cursor-pointer mr-10 text-4xl mt-5 flex justify-end">
      ×
    </div>
      <ul class="flex flex-col gap-4 justify-center items-center mt-10 font-robot-slab">
        <li class="cursor-pointer hover:text-white transition-colors delay-100">Меню</li>
        <li class="cursor-pointer hover:text-white transition-colors delay-100">Акции</li>
        <li class="cursor-pointer hover:text-white transition-colors delay-100">Бонусы</li>
        <li class="cursor-pointer hover:text-white transition-colors delay-100">Контакты</li>
        <li class="cursor-pointer hover:text-white transition-colors delay-100">Вход</li>
      </ul>
  </div>
  </Transition>
</template>

<style scoped>



</style>