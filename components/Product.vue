<script setup lang="ts">

import {menuList} from "../public/product";
import {productList} from "../public/product";

const ShopCart = inject('ShopCart')

const addToCart = (item: object) => {
  ShopCart.value.push(item)
  localStorage.setItem('ShopCart', JSON.stringify(ShopCart.value))
}

const delFromCart = (item: object) => {
  ShopCart.value.splice(ShopCart.value.indexOf(item), 1)
  localStorage.setItem('ShopCart', JSON.stringify(ShopCart.value))
}

</script>

<template>
  <div class="flex w-full justify-center">

    <div class="w-10/12 flex flex-col justify-center items-center gap-8">
      <div class="menu-list w-full flex justify-center">
        <ul class="flex gap-4 font-roboto tracking-widest">
          <li v-for="i in menuList" class="cursor-pointer hover:text-one transition-colors delay-100">{{ i.name }}</li>
        </ul>
      </div>
      <div class="product w-full flex flex-col gap-4">
        <div v-for="category in productList" class="flex flex-col">
          <hr class="h-px bg-gray-300 border-0"/>
          <div class="flex m-10">
            <h1 class="text-xl font-robot-slab tracking-widest">{{ category.name }}</h1>
          </div>

          <div class="container w-full px-5 py-6 mx-auto">
            <div class="grid lg:grid-cols-4 gap-y-6">

              <div class="max-w-xs mx-4 mb-2 rounded-lg shadow-lg justify-between flex flex-col" v-if="category.item.length > 0" v-for="item in category.item">
                <div class="image flex justify-center items-center">
                  <img class="h-48" :src="item.image" alt="Image" />
                </div>
                <div class="px-6 py-4">
                  <h4 class="mb-3 text-xl font-semibold tracking-tight text-green-600 uppercase">{{ item.name }}</h4>
                  <p class="leading-normal text-gray-700">{{ item.description }}</p>
                </div>
                <div class="flex items-center justify-between p-4">
                  <button class="px-4 py-2 bg-green-600 text-green-50">В корзину</button>
                  <span class="text-xl text-green-600">{{ item.price }} ₽</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


    <div class="gap-2 flex flex-col w-80 fixed right-0 bottom-10 shadow-big p-2 z-50">
      <div class="font-mono font-bold text-xl text-center">Корзина</div>
      <div class="cart mr-4">
        <div class="flex justify-between" v-for="item in ShopCart">
          <h1>{{ item.name }}</h1>
          <div @click="delFromCart(item)" class="cursor-pointer">×</div>
        </div>
        <div class="font-bold flex justify-center mt-5 border-2 rounded-full cursor-pointer">
          Оформить заказ
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>