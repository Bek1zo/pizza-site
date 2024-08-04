<script setup lang="ts">

import {menuList} from "../public/product";
import {productList} from "../public/product";

const ShopCart = inject('ShopCart')

const HeaderVisible = inject("HeaderVisible")

interface Product {
  id: number,
  name: string,
  price: number,
  image: string
}

const selectedProduct: ref<Product> = ref({
  id: null,
  name: null,
  price: null,
  image: null
})
provide('selectedProduct', selectedProduct)

const ShopCartSum = inject('ShopCartSum')

const addToCart = (item: object) => {
  ShopCartSum.value += item.price
  ShopCart.value.push(item)
  localStorage.setItem('ShopCartSum', JSON.stringify(ShopCartSum.value))
  localStorage.setItem('ShopCart', JSON.stringify(ShopCart.value))
}


</script>

<template>

  <ProductView/>

  <div class="flex w-full justify-center sticky top-0 h-20 bg-white border-b-2">

    <div class="flex flex-col justify-center items-center gap-8">

      <div class="menu-list w-full flex justify-center">
        <ul class="flex gap-4 justify-center items-center flex-wrap font-mono font-bold text-lg tracking-wide">
          <li v-for="i in menuList" class="cursor-pointer hover:text-green-500 transition-colors delay-100"><a
              :href="'#' + i.name">{{ i.name }}</a></li>
          <li v-if="!HeaderVisible">
            <HeaderShopCartButton/>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="flex w-full justify-center">

    <div class="w-10/12 flex flex-col justify-center items-center gap-8">

      <div class="product w-full flex flex-col gap-4">
        <div v-for="category in productList" :id="category.name" class="flex flex-col">

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
                  <div class="flex justify-between">
                    <h4 class="mb-3 text-xl font-semibold tracking-tight text-green-600 uppercase">{{ item.name }}</h4>
                    <svg data-modal-target="viewProduct" data-modal-toggle="viewProduct" @click="selectedProduct = item" width="1em" height="1em" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer"><path d="M9 18A9 9 0 119 0a9 9 0 010 18zm0-1A8 8 0 109 1a8 8 0 000 16zM8 4h2v2H8V4zm0 4h2v6H8V8z" fill="currentColor" fill-rule="nonzero"></path></svg>

                  </div>
                  <p class="leading-normal text-gray-700">{{ item.description }}</p>
                </div>
                <div class="flex items-center justify-between p-4">
                  <button class="px-4 py-2 bg-green-600 text-green-50" @click="addToCart(item)">В корзину</button>
                  <span class="text-xl text-green-600">{{ item.price }} ₽</span>
                </div>
              </div>
            </div>
          </div>
          <hr class="h-px bg-gray-300 border-0"/>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>