<template>
  <div class="flex flex-col md:grid md:grid-cols-4 gap-4">
    <div
      v-for="data in mainStore.coinWatchlists"
      class="w-full max-w-sm bg-[#181818] border border-gray-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex flex-col items-center py-10">
        <img class="w-24 h-24 mb-3 border border-gray-700 rounded-full shadow-lg" :src="data.iconUrl" alt="Crypto Logo" />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {{ data.cryptoName }}
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{ data.symbol }}</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
          <a
            :href="data.coinrankingUrl"
            target="_blank"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >View More</a
          >
          <a
            href="#"
            @click.prevent="mainStore.deleteCoinWatchlist(data.id)"
            class="inline-flex items-center px-4 py-2 text-sm font-bold text-center text-red-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >Delete</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted } from 'vue'
import { useMainStore } from '../stores/counter'
const mainStore = useMainStore()

onBeforeMount(() => {
  mainStore.fetchCoinWatchlist()
})

onMounted(() => {
  initFlowbite()
})
</script>

<style lang="scss" scoped></style>
