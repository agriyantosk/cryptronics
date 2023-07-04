<template>
  <div>
    <table class="text-left w-full">
      <thead class="bg-[#181818] flex text-white w-full items-center rounded-2xl">
        <tr class="flex w-full mb-4">
          <th class="p-4 w-1/4">#</th>
          <th class="p-4 w-1/4">Transactions</th>
          <th class="p-4 w-1/4">Amount</th>
          <th class="p-4 w-1/4">Date</th>
        </tr>
      </thead>
      <!-- Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! -->
      <tbody
        class="bg-[#181818] rounded-b-2xl flex flex-col items-center justify-between overflow-y-scroll w-full"
        style="height: 50vh"
      >
        <tr
          v-for="(data, index) in mainStore.balanceHistoryDatas"
          class="flex w-full mb-4 border-b-white border-y items-center"
        >
          <td class="p-4 w-1/4 flex">
            <div class="text-base font-semibold">{{ index + 1 }}</div>
          </td>
          <td class="p-4 w-1/4">
            {{ data.transaction }}
          </td>
          <td class="p-4 w-1/4">
            {{
              Number(data.amount).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
            }}
          </td>
          <td class="p-4 w-1/4">
            {{ data.createdAt }}
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
  mainStore.fetchBalanceHistory()
})
</script>

<style lang="scss" scoped></style>
