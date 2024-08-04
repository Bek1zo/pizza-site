<script setup lang="ts">

const selectedProduct = inject('selectedProduct')

</script>

<template>

  <div id="viewProduct" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <div data-modal-hide="viewProduct" class="absolute z-10 right-6 top-1 text-green-800 cursor-pointer text-6xl">
        ×
      </div>
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div class="p-4 md:p-5 grid grid-cols-2">


          <div>
            <img :src="selectedProduct.image" alt="">
          </div>
          <div class="flex flex-col gap-2">
            <h1 class="font-bold font-roboto tracking-widest text-xl">{{ selectedProduct.name }}</h1>
            <span>
              {{ selectedProduct.description }}
            </span>
            <span class="font-mono text-xs">
              Белки — 16
              Жиры — 19
              Углеводы — 6
              Энергетическая ценность — 257 кКал; 1077 кДж
              Вес — 100
            </span>
          </div>
        </div>
        <!-- Modal footer -->
        <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button data-modal-hide="viewProduct" type="button" class="text-white w-full bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Добавить в корзину за {{ selectedProduct.price }} ₽</button></div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>