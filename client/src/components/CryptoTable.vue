<template>
  <div>
    <div class="relative overflow-x-auto shadow-md">
      <div v-if="mainStore.loading === true">
        <LoadingSpinner />
      </div>
      <div v-else>
        <table class="w-full text-sm text-left text-white dark:text-gray-400">
          <thead
            class="text-xs border-y border-gray-700 py-4 text-white uppercase bg-[#181818] dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">#</th>
              <th scope="col" class="px-6 py-3">Name</th>
              <th scope="col" class="px-6 py-3">Price</th>
              <th scope="col" class="px-6 py-3">Change</th>
              <th scope="col" class="px-6 py-3">Market Cap</th>
              <th scope="col" class="px-6 py-3">Volume(24h)</th>
              <th scope="col" class="px-6 py-3 text-center">Add to Watchlist</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="data in mainStore?.cryptoDatas?.data?.coins"
              class="bg-[#181818] border-b border-gray-700 dark:bg-gray-800 dark:border-gray-500"
            >
              <td class="px-6 py-4">
                {{ data.rank }}
              </td>
              <th scope="row" class="px-6 py-4 text-white whitespace-nowrap dark:text-white">
                <div class="flex items-center">
                  <img class="w-6 h-10 rounded-full" :src="data.iconUrl" alt="Jese image" />
                  <div class="pl-3">
                    <a :href="data.coinrankingUrl" target="_blank">
                      <div class="text-base font-semibold">{{ data.symbol }}</div>
                      <div class="font-normal text-gray-500">{{ data.name }}</div>
                    </a>
                  </div>
                </div>
              </th>
              <td class="px-6 py-4">
                {{
                  Number(data.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                }}
              </td>
              <td class="px-6 py-4">
                <div class="flex gap-2">
                  <svg
                    height="20"
                    viewBox="0 0 512 512"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    :transform="data.change < 0 ? 'rotate(180)' : ''"
                  >
                    <path
                      d="M464,464H48a16,16,0,0,1-14.07-23.62l208-384a16,16,0,0,1,28.14,0l208,384A16,16,0,0,1,464,464Z"
                      :fill="data.change > 0 ? '#22C55E' : '#EF4444'"
                    />
                  </svg>
                  <span> {{ data.change }}% </span>
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center">
                  {{
                    Number(data.marketCap).toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD'
                    })
                  }}
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center">
                  {{
                    Number(data['24hVolume']).toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD'
                    })
                  }}
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="flex justify-center">
                  <button
                    type="button"
                    @click.prevent="
                      mainStore.addCoinWatchlist({
                        cryptoName: data.symbol,
                        symbol: data.name,
                        iconUrl: data.iconUrl,
                        coinrankingUrl: data.coinrankingUrl
                      })
                    "
                    class="text-white bg-green-500 hover:bg-green-400 font-medium rounded-lg text-sm px-3 py-2"
                  >
                    +
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useMainStore } from '../stores/counter'
import LoadingSpinner from './LoadingSpinner.vue'
const mainStore = useMainStore()

onBeforeMount(() => {
  mainStore.fetchCryptoData()
})
</script>

<style lang="scss" scoped></style>
