<template>
  <!-- component -->
  <table class="text-left w-full border-white border rounded-xl">
    <thead class="bg-[#181818] flex text-white w-full items-center">
      <tr class="flex w-full mb-4">
        <th class="p-4 w-1/4">Trade</th>
        <th class="p-4 w-1/4">Amount</th>
        <th class="p-4 w-1/4">Trade Unit</th>
        <th class="p-4 w-1/4">Trade Date</th>
      </tr>
    </thead>
    <!-- Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! -->
    <tbody
      class="bg-[#181818] flex flex-col items-center justify-between overflow-y-scroll w-full"
      style="height: 50vh"
    >
      <tr
        v-for="data in mainStore.historyDatas"
        class="flex w-full mb-4 border-b-white border-y items-center"
      >
        <td class="p-4 w-1/4 flex">
          <!-- <img
            class="w-10 h-10 rounded-full"
            src="/docs/images/people/profile-picture-1.jpg"
            alt="Jese image"
          /> -->
          <div class="pl-3">
            <div class="text-base font-semibold">{{ data.cryptoName }}</div>
            <!-- <div class="font-normal text-gray-500">Bitcoin</div> -->
          </div>
        </td>
        <td class="p-4 w-1/4">
          {{ Number(data.amount).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}
        </td>
        <td class="p-4 w-1/4">
          {{
            Number(data.tradeWeight).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
          }}
        </td>
        <td class="p-4 w-1/4">{{ new Date(data.createdAt).toLocaleDateString('id-ID') }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useMainStore } from '../stores/counter'
const mainStore = useMainStore()

onBeforeMount(() => {
  mainStore.fetchHistories()
})
</script>

<style lang="scss" scoped></style>
