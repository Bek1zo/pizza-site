<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
</script>

<template>
  <div v-if="width > 768" class="flex justify-center items-center font-mono gap-4 h-12">
    <div class="text-white cursor-pointer bg-one rounded-full w-full flex justify-center items-center h-full">
      <div>
        <img src="/assets/pin.svg" class="h-6 w-12 flex justify-center items-center m-auto" alt="Pin icon"/>
      </div>
      <div class="flex items-center justify-center">
        Укажите адрес
      </div>
    </div>
  </div>
  <div v-else>

  </div>
</template>

<style scoped>

</style>