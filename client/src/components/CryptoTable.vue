<template>
  <div>
    <div class="relative overflow-x-auto shadow-md">
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
            <th
              scope="row"
              class="flex items-center px-6 py-4 text-white whitespace-nowrap dark:text-white"
            >
              <img class="w-6 h-10 rounded-full" :src="data.iconUrl" alt="Jese image" />
              <div class="pl-3">
                <a :href="data.coinrankingUrl" target="_blank">
                  <div class="text-base font-semibold">{{ data.symbol }}</div>
                  <div class="font-normal text-gray-500">{{ data.name }}</div>
                </a>
              </div>
            </th>
            <td class="px-6 py-4">
              {{
                Number(data.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
              }}
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center">{{ data.change * 100 }}%</div>
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
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useMainStore } from '../stores/counter'
const mainStore = useMainStore()

onBeforeMount(() => {
  mainStore.fetchCryptoData()
})
</script>

<style lang="scss" scoped></style>
