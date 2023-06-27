<template>
  <div>
    <div class="p-4">
      <div class="px-6 mb-6">
        <h1 class="text-white text-2xl font-bold">Today's Highlights by Cryptronics</h1>
      </div>
      <!-- INI BAGIAN CARD YANG HIGHLIGHT -->
      <div class="flex justify-evenly gap-10">
        <div class="w-[35%]">
          <!-- BEST COINS -->
          <div
            class="w-full p-2 bg-gray-800 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
          >
            <div class="flex items-center justify-between">
              <h5 class="text-md font-bold leading-none text-white dark:text-white mb-2">
                Best Coins
              </h5>
            </div>
            <div class="flow-root">
              <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                <li v-for="item in mainStore?.globalStats?.data?.bestCoins" class="py-2">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img class="w-8 h-8 rounded-full" :src="item.iconUrl" alt="Neil image" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-light text-white truncate dark:text-white">
                        {{ item.symbol }}
                      </p>
                    </div>
                    <a :href="item.coinrankingUrl" target="_blank">
                      <div
                        class="inline-flex items-center text-md font-semibold text-blue-500 underline dark:text-white"
                      >
                        Details ->
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-[35%]">
          <!-- NEWEST COINS -->
          <div
            class="w-full p-2 bg-gray-800 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
          >
            <div class="flex items-center justify-between">
              <h5 class="text-md font-bold leading-none text-white dark:text-white mb-2">
                Newest Coins
              </h5>
            </div>
            <div class="flow-root">
              <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                <li v-for="item in mainStore?.globalStats?.data?.newestCoins" class="py-2">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img class="w-8 h-8 rounded-full" :src="item.iconUrl" alt="Neil image" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-light text-white truncate dark:text-white">
                        {{ item.symbol }}
                      </p>
                    </div>
                    <a :href="item.coinrankingUrl" target="_blank">
                      <div
                        class="inline-flex items-center text-md font-semibold text-blue-500 underline dark:text-white"
                      >
                        Details ->
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '../stores/counter'

const mainStore = useMainStore()
</script>

<style lang="scss" scoped></style>
