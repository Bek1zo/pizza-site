<script setup lang="ts">

import {menuList} from "../public/product";
import {productList} from "../public/product";

</script>

<template>
  <div class="flex w-full justify-center">

    <div class="w-full flex flex-col justify-center items-center gap-8">
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
            <div class="flex flex-col w-3/12 gap-2" v-for="item in category.item">

              <img :src="item.image" alt="" class="w-60 h-60">
              <h1 class="font-bold">{{ item.name }}</h1>
              <span class="font-mono">{{ item.description }}</span>
              <span>{{ item.price }} ₽</span>
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

            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      корзина
    </div>
  </div>
</template>

<style scoped>

</style>