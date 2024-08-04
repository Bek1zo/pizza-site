<template>

    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 fixed top-0 w-full z-10">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="https://bekizo.ru" class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Next Pizza</span>
        </a>
        <div class="flex items-center lg:order-2">
          <a href="#" class="invisible md:visible w-0 md:w-40 text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800">Личный кабинет</a>
          <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Корзина</a>
          <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Меню</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Акции</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Доставка</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Оплата</a>
            </li>
            <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">О нас</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>


<!--<script setup lang="ts">-->

<!--import { useWindowSize } from '@vueuse/core'-->

<!--const { width } = useWindowSize()-->

<!--const rightSideMenu = ref(false)-->

<!--const clickRightSideMenu = () => {-->
<!--  rightSideMenu.value = !rightSideMenu.value-->
<!--}-->

<!--</script>-->

<!--<template>-->
<!--  <div>-->
<!--    <ul v-if="width > 1024" class="flex gap-4 justify-end items-center md:visible invisible h-full font-robot-slab">-->
<!--      <li class="cursor-pointer hover:text-green-500 transition-colors delay-100">Меню</li>-->
<!--      <li class="cursor-pointer hover:text-green-500 transition-colors delay-100">Акции</li>-->
<!--      <li class="cursor-pointer hover:text-green-500 transition-colors delay-100">Бонусы</li>-->
<!--      <li class="cursor-pointer hover:text-green-500 transition-colors delay-100">Контакты</li>-->
<!--      <li class="cursor-pointer hover:text-green-500 transition-colors delay-100">Вход</li>-->
<!--    </ul>-->
<!--&lt;!&ndash;    <div v-else @click="clickRightSideMenu()" class="pt-4 pl-2">&ndash;&gt;-->
<!--&lt;!&ndash;      <svg xmlns="http://www.w3.org/2000/svg" class="m-auto w-8 h-8" viewBox="0 0 50 50">&ndash;&gt;-->
<!--&lt;!&ndash;        <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>&ndash;&gt;-->
<!--&lt;!&ndash;      </svg>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--  </div>-->

<!--&lt;!&ndash;  <Transition>&ndash;&gt;-->
<!--&lt;!&ndash;  <div v-if="rightSideMenu" class="absolute top-0 right-0 bg-one z-10">&ndash;&gt;-->
<!--&lt;!&ndash;    <div @click="clickRightSideMenu()" class="cursor-pointer mr-10 text-4xl mt-5 flex justify-end">&ndash;&gt;-->
<!--&lt;!&ndash;      ×&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;      <ul class="flex flex-col gap-4 justify-center items-center mt-10 font-robot-slab">&ndash;&gt;-->
<!--&lt;!&ndash;        <li class="cursor-pointer hover:text-white transition-colors delay-100">Меню</li>&ndash;&gt;-->
<!--&lt;!&ndash;        <li class="cursor-pointer hover:text-white transition-colors delay-100">Акции</li>&ndash;&gt;-->
<!--&lt;!&ndash;        <li class="cursor-pointer hover:text-white transition-colors delay-100">Бонусы</li>&ndash;&gt;-->
<!--&lt;!&ndash;        <li class="cursor-pointer hover:text-white transition-colors delay-100">Контакты</li>&ndash;&gt;-->
<!--&lt;!&ndash;        <li class="cursor-pointer hover:text-white transition-colors delay-100">Вход</li>&ndash;&gt;-->
<!--&lt;!&ndash;      </ul>&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->
<!--&lt;!&ndash;  </Transition>&ndash;&gt;-->
<!--</template>-->

<!--<style scoped>-->



<!--</style>-->