<template>
  <div>
    <!-- <pre>{{ mainStore?.journals }}</pre> -->
    <table class="w-full text-sm text-left text-white dark:text-gray-400">
      <thead
        class="text-xs border-y border-gray-700 py-4 text-white uppercase bg-[#181818] dark:bg-gray-700 dark:text-gray-400"
      >
        <tr class="text-center">
          <th scope="col" class="px-6 py-3">#</th>
          <th scope="col" class="px-6 py-3">Cryptocurrency</th>
          <th scope="col" class="px-6 py-3">Entry Price</th>
          <th scope="col" class="px-6 py-3">Exit Price</th>
          <th scope="col" class="px-6 py-3">Trade Weight</th>
          <th scope="col" class="px-6 py-3">Ratio</th>
          <th scope="col" class="px-6 py-3">Percentage</th>
          <th scope="col" class="px-6 py-3">Profit/Loss</th>
          <th scope="col" class="px-6 py-3">Result</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(data, index) in mainStore?.journals"
          class="bg-[#181818] border-b border-gray-700 dark:bg-gray-800 dark:border-gray-500"
        >
          <td class="px-6 py-4 text-center">
            {{ index + 1 }}
          </td>
          <td class="px-6 text-center py-4">
            <div class="pl-3">
              <div class="font-normal text-gray-500">{{ data.cryptoName }}</div>
            </div>
          </td>
          <td class="px-6 py-4 text-center">
            {{
              Number(data.entryPrice).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
              })
            }}
          </td>
          <td class="px-6 py-4 text-center">
            {{
              Number(data.exitPrice).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
              })
            }}
          </td>
          <td class="px-6 py-4 text-center">
            {{ Number(data?.tradeWeight).toFixed(2) }} {{ data.cryptoName }}
          </td>
          <td class="px-6 py-4 text-center">1 : {{ Number(data?.ratio).toFixed(2) }}</td>
          <td class="px-6 py-4 text-center">{{ Number(data?.percentage * 100).toFixed(2) }}%</td>
          <td class="px-6 py-4 text-center">
            {{
              Number(data.profitOrLoss).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
              })
            }}
          </td>
          <td
            :class="
              data.result.includes('PROFIT') ? 'px-6 py-4 text-center font-bold text-green-500' : 'px-6 py-4 text-center font-bold text-red-400'
            "
          >
            {{ data.result }}
          </td>

          <td class="px-6 py-4 text-center">
            <div class="flex justify-evenly">
              <span @click.prevent="mainStore.deleteJournal(data.id)"
                ><button class="bg-green-500 hover:bg-green-400 rounded-lg px-4 py-2">
                  Delete
                </button></span
              >
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useMainStore } from '../stores/counter'
const mainStore = useMainStore()

onBeforeMount(() => {
  mainStore.fetchJournals()
  console.log(mainStore.journals)
})
</script>

<style lang="scss" scoped></style>
