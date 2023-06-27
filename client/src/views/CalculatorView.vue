<template>
  <div>
    <LoggedNavbar />
    <h1
      class="ml-6 mt-6 mb-16 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600"
    >
      Plan Calculator
    </h1>
    <div class="flex justify-center">
      <div class="inline-flex rounded-md shadow-sm" role="group">
        <button
          autofocus
          @click.prevent="switcher(1)"
          type="button"
          class="py-2 px-4 text-sm font-medium text-white bg-transparent border border-gray-700 rounded-l-lg hover:bg-gray-100 hover:text-green-500 focus:outline-none focus:ring-2 focus:bg-white focus:text-green-500"
        >
          Risk/Reward Ratio Calculator
        </button>
        <button
          @click.prevent="switcher(2)"
          type="button"
          class="py-2 px-4 text-sm font-medium text-white bg-transparent border-t border-b border-gray-700 hover:bg-gray-100 hover:text-green-500 focus:outline-none focus:ring-2 focus:bg-white focus:text-green-500"
        >
          Exit Price Calculator (Percentage Based)
        </button>
        <button
          @click.prevent="switcher(3)"
          type="button"
          class="py-2 px-4 text-sm font-medium text-white bg-transparent border border-gray-700 rounded-r-md hover:bg-gray-100 hover:text-green-500 focus:outline-none focus:ring-2 focus:bg-white focus:text-green-500"
        >
          Exit Price Calculator (Profit Based)
        </button>
      </div>
    </div>

    <div v-if="calcNum === 1">
      <Calculator1 />
    </div>
    <div v-else-if="calcNum === 2">
      <Calculator2 />
    </div>
    <div v-else-if="calcNum === 3">
      <Calculator3 />
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import LoggedNavbar from '../components/LoggedNavbar.vue'
import Calculator1 from '../components/Calculator1.vue'
import { useMainStore } from '../stores/counter'
import Calculator2 from '../components/Calculator2.vue'
import Calculator3 from '../components/Calculator3.vue'

const mainStore = useMainStore()
const form3 = {
  cryptoName: '',
  investment: '',
  entryPrice: '',
  exitPrice: '',
  stopLoss: '',
  percentage: '',
  ratio: '',
  targetProfit: ''
}
let calcNum = ref(1)

const calc3 = () => {
  form3.exitPrice = (form3.investment + form3.targetProfit) / (form3.investment / form3.entryPrice)
  form3.percentage = (form3.exitPrice - form3.entryPrice) / form3.entryPrice
  form3.ratio = (form3.exitPrice - form3.entryPrice) / (form3.entryPrice - form3.stopLoss)
}

const switcher = (num) => {
  calcNum.value = num
}

onBeforeMount(() => {
  mainStore.fetchCryptoData()
})
</script>

<style lang="scss" scoped></style>
