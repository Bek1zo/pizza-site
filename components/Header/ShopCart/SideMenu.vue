<script setup lang="ts">
const ShopCartVisible = inject("ShopCartVisible")
const ShopCart = inject ('ShopCart')
const ShopCartSum = inject('ShopCartSum')
const ShopCartCount = inject("ShopCartCount")




const delFromCart = (item: object) => {
  ShopCartSum.value -= item.price
  ShopCart.value.splice(ShopCart.value.indexOf(item), 1)
  localStorage.setItem('ShopCart', JSON.stringify(ShopCart.value))
  localStorage.setItem('ShopCartSum', ShopCartSum.value)
}
</script>

<template>
  <USlideover v-model="ShopCartVisible" class=" h-full w-full">
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
            @click="ShopCartVisible = false"
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