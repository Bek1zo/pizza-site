<script setup lang="ts">
const ShopCartCount = inject("ShopCartCount")
const ShopCart = inject ('ShopCart')
const ShopCartSum = inject('ShopCartSum')

const shopCartVisible = ref(false)

const delFromCart = (item: object) => {
  ShopCartSum.value =- item.price
  ShopCart.value.splice(ShopCart.value.indexOf(item), 1)
  localStorage.setItem('ShopCart', JSON.stringify(ShopCart.value))
  localStorage.setItem('ShopCartSum', JSON.stringify(ShopCartSum.value))
}

</script>

<template>
  <div class="flex items-center lg:order-2">
    <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none">Кабинет</a>

    <div @click="shopCartVisible = !shopCartVisible" class="cursor-pointer flex gap-2 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
      <div>
        Корзина
      </div>
      <div v-if="ShopCartCount > 0">
        ({{ ShopCartCount }})
      </div>
    </div>

    <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
      <span class="sr-only">Открыть меню</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>

  <USlideover v-model="shopCartVisible" class=" h-full w-full">
    <div class="flex-1 h-full min-w-96 bg-white overflow-y-auto">
      <div>
        <UButton
            color="gray"
            variant="ghost"
            size="sm"
            icon="i-heroicons-x-mark-20-solid"
            class="flex absolute end-5 top-5 z-10"
            square
            padded
            @click="shopCartVisible = false"
        />

        <div class="mt-10 flex flex-col bg-white p-4">
          <div v-if="ShopCartCount > 0" v-for="item in ShopCart" class="grid grid-cols-2">
            <img :src="item.image" alt="">
            <div>
              <div class="flex justify-between font-mono font-bold tracking-wide">

                <div>
                  {{ item.name }}
                </div>
                <div>
                  <UButton
                      color="gray"
                      variant="ghost"
                      size="sm"
                      icon="i-heroicons-x-mark-20-solid"
                      square
                      padded
                      @click="delFromCart(item)"
                  />
                </div>
              </div>
              <div class="font-mono">
                {{ item.price }} ₽
              </div>
            </div>

          </div>
          <div v-else class="flex justify-center">
            Вы еще не добавили товары в корзину
          </div>
        </div>
        <div class="min-w-96 flex flex-col justify-center items-center gap-2 h-24 bg-white p-4">
          <button :disabled="ShopCartCount < 0" @click="shopCartVisible = !shopCartVisible" class="flex justify-center items-center cursor-pointer w-full gap-2 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
            Оформить заказ
          </button>
          Итого: {{ ShopCartSum }} ₽
        </div>
      </div>
    </div>
  </USlideover>


</template>

<style scoped>

</style>