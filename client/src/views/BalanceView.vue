<template>
  <div>
    <ProfileSideBar />
    <div class="ml-64">
      <h1
        class="ml-6 my-10 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-green-500 dark:decoration-blue-600"
      >
        Deposit/Withdraw
      </h1>
      <div class="flex flex-col gap-8">
        <div class="flex justify-center">
          <div class="inline-flex rounded-md shadow-sm" role="group">
            <button
              autofocus
              @click.prevent="switcher('Form')"
              type="button"
              class="py-2 px-4 text-sm font-medium text-white bg-transparent border border-gray-700 rounded-l-lg hover:bg-gray-100 hover:text-green-500 focus:outline-none focus:ring-2 focus:bg-white focus:text-green-500"
            >
              Deposit/Withdraw
            </button>
            <button
              @click.prevent="switcher('Transactions')"
              type="button"
              class="py-2 px-4 text-sm font-medium text-white bg-transparent border border-gray-700 rounded-r-md hover:bg-gray-100 hover:text-green-500 focus:outline-none focus:ring-2 focus:bg-white focus:text-green-500"
            >
              Logs
            </button>
          </div>
        </div>
        <div class="mx-auto w-[90%]">
          <div v-if="table === 'Form'">
            <BalanceForm />
          </div>
          <div v-else-if="table === 'Transactions'" class="border-white border rounded-2xl">
            <TransactionsTable />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import BalanceForm from '../components/BalanceForm.vue'
import ProfileSideBar from '../components/ProfileSideBar.vue'
import TransactionsTable from '../components/TransactionsTable.vue'

let table = ref('Form')

const switcher = (val) => {
  table.value = val
}

onMounted(() => {
  initFlowbite()
})
</script>

<style lang="scss" scoped></style>
