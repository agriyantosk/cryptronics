k
<template>
  <div>
    <form class="w-[40%]" @submit.prevent="handleSubmit">
      <div class="mb-6 w-full">
        <label for="base-input" class="block mb-2 text-sm font-medium text-white dark:text-white"
          >Input Amount</label
        >
        <input
          type="text"
          id="base-input"
          v-model="form.amount"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="mb-6 w-full flex justify-start">
        <select
          v-model="form.transaction"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            Deposit
          </option>
          <option class="block mb-2 text-sm font-medium text-white dark:text-white">
            Withdraw
          </option>
        </select>
      </div>
      <button
        type="submit"
        class="text-white bg-green-500 hover:bg-green-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { useMainStore } from '../stores/counter'
const mainStore = useMainStore()
const form = {
  transaction: '',
  amount: ''
}

const handleSubmit = (event) => {
  mainStore.addBalanceHistory(form)
}
</script>

<style lang="scss" scoped></style>
