<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
</script>

<template>
  <div class="w-80 hover:w-96 transition-all">
    <div class="flex justify-center items-center font-mono h-12 show w-96 md:visible invisible">
      <div class="text-white cursor-pointer bg-green-500 rounded-full w-full flex justify-center items-center h-full p-2">
        <div class="flex items-center justify-center">
          <img src="/assets/pin.svg" class="h-6 w-12 flex justify-center items-center m-auto" alt="Pin icon"/>
        </div>
        <div class="flex items-center justify-center md:text-lg text-sm">
          Адрес доставки
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>