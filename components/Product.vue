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
          <div class="flex mb-10 justify-center">
            <h1 class="font-bold text-xl font-roboto-slab tracking-widest">{{ category.name }}</h1>
          </div>

          <div class="flex flex-wrap gap-10 justify-center" v-if="category.item.length > 0">
            <div class="flex flex-col w-3/12 gap-2 justify-between" v-for="item in category.item">

              <img :src="item.image" alt="" class="w-60 h-60">
              <h1 class="font-bold">{{ item.name }}</h1>
              <span class="font-mono">{{ item.description }}</span>
              <div v-if="category.name === 'Пицца'" class="flex gap-2">
                <div class="border-2 rounded-full w-32 h-10 flex justify-center items-center cursor-pointer">
                  Традиционное
                </div>
                <div class="border-2 rounded-full w-32 h-10 flex justify-center items-center cursor-pointer">
                  Тонкое
                </div>
              </div>
              <div class="flex gap-2" v-if="item.size">
                <div class="border-2 rounded-full w-16 h-10 flex justify-center items-center cursor-pointer hover:bg-amber-600" v-for="size in item.size">
                  {{ size }}
                </div>
              </div>
              <div class="flex justify-between">
                <span class="flex justify-center items-center">{{ item.price }} ₽</span>
                <div class="cursor-pointer w-24 border-2 rounded-full flex justify-center items-center h-10" @click="addToCart(item)">
                  В корзину
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="gap-2 flex flex-col  w-2/12">
      <div class="font-mono font-bold text-xl text-center">Корзина</div>
      <div class="cart mr-4">
        <div class="flex justify-between" v-for="item in ShopCart">
          <h1>{{ item.name }}</h1>
          <div @click="delFromCart(item)" class="cursor-pointer">X</div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>