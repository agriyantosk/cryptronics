<template>
  <div>
    <div class="mx-[20%] my-10">
      <form @submit="handleSubmit">
        <label for="cryptoName" class="inline-block mb-2 font-semibold">Cryptocurrency</label>
        <select
          v-model="form.cryptoName"
          class="flex-grow w-full h-12 px-4 mb-4 transition duration-200 text-gray-900 bg-white border border-gray-400 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline focus:border-indigo-500"
        >
          <option v-for="data in mainStore?.cryptoDatas?.data?.coins">{{ data.symbol }}</option>
        </select>
        <label for="investment" class="inline-block mb-2 font-semibold">Initial Investment</label
        ><input
          id="investment"
          placeholder="Initial Investment"
          type="number"
          v-model="form.investment"
          class="flex-grow w-full h-12 px-4 mb-4 transition duration-200 text-gray-900 bg-white border border-gray-400 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline focus:border-indigo-500"
          style="appearance: none"
          required
        />
        <label for="entryPrice" class="inline-block mb-2 font-semibold">Entry Price</label
        ><input
          id="entryPrice"
          placeholder="Entry Price"
          type="number"
          v-model="form.entryPrice"
          class="flex-grow w-full h-12 px-4 mb-4 transition duration-200 text-gray-900 bg-white border border-gray-400 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline focus:border-indigo-500"
          style="appearance: none"
          required
        />
        <label for="exitPrice" class="inline-block mb-2 font-semibold">Exit Price</label
        ><input
          id="exitPrice"
          placeholder="Exit Price"
          type="number"
          v-model="form.exitPrice"
          class="flex-grow w-full h-12 px-4 mb-4 transition duration-200 text-gray-900 bg-white border border-gray-400 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline focus:border-indigo-500"
          style="appearance: none"
          required
        />
        <label for="stopLoss" class="inline-block mb-2 font-semibold">Stop Loss</label
        ><input
          id="stopLoss"
          placeholder="Stop Loss"
          type="number"
          v-model="form.stopLoss"
          class="flex-grow w-full h-12 px-4 mb-4 transition duration-200 text-gray-900 bg-white border border-gray-400 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline focus:border-indigo-500"
          style="appearance: none"
          required
        />
        <div class="flex justify-end items-center">
          <div>
            <button
              type="submit"
              class="px-6 h-10 inline-flex items-center justify-center rounded-lg ml-4 mb-2 font-medium tracking-wide text-white transition duration-200 shadow-md bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none"
            >
              Add Journal
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useMainStore } from '../stores/counter'

const mainStore = useMainStore()
const form = {
  cryptoName: '',
  ratio: '',
  stopLoss: '',
  entryPrice: '',
  exitPrice: '',
  tradeWeight: '',
  ratio: '',
  profitOrLoss: '',
  investment: ''
}

const calculate = () => {
  form.ratio = (form.exitPrice - form.entryPrice) / (form.entryPrice - form.stopLoss)
  form.tradeWeight = form.investment / form.entryPrice
}

const handleSubmit = async (event) => {
  event.preventDefault()
  try {
    await calculate()
    await mainStore.addJournal(form)
  } catch (error) {
    console.log(error)
  }
}

onBeforeMount(() => {
  mainStore.fetchCryptoData()
})
</script>

<style lang="scss" scoped></style>
