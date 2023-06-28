<template>
  <div>
    <LoggedNavbar />
    <div class="mx-6">
      <h1
        class="my-10 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-green-500 dark:decoration-blue-600"
      >
        Watchlists
      </h1>
      <div class="flex justify-center">
        <div class="inline-flex rounded-md shadow-sm" role="group">
          <button
            autofocus
            @click.prevent="switcher('Coin')"
            type="button"
            class="py-2 px-4 text-sm font-medium text-white bg-transparent border border-gray-700 rounded-l-lg hover:bg-gray-100 hover:text-green-500 focus:outline-none focus:ring-2 focus:bg-white focus:text-green-500"
          >
            Coin Market Watchlist
          </button>
          <button
            @click.prevent="switcher('Launch')"
            type="button"
            class="py-2 px-4 text-sm font-medium text-white bg-transparent border border-gray-700 rounded-r-md hover:bg-gray-100 hover:text-green-500 focus:outline-none focus:ring-2 focus:bg-white focus:text-green-500"
          >
            Coin Launch Watchlist
          </button>
        </div>
      </div>
      <div class="mt-6">
        <div v-if="watchlist === 'Coin'">
          <CoinWatchlist />
        </div>
        <div v-else-if="watchlist === 'Launch'">
          <LaunchWatchlist />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoggedNavbar from '../components/LoggedNavbar.vue'
import CoinWatchlist from '../components/CoinWatchlist.vue'
import { ref } from 'vue'
import { onMounted } from 'vue'
import LaunchWatchlist from '../components/LaunchWatchlist.vue'

let watchlist = ref('Coin')

onMounted(() => {
  initFlowbite()
})

const switcher = (num) => {
  watchlist.value = num
}
</script>

<style lang="scss" scoped></style>
