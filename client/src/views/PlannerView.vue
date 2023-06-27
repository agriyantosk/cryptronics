<template>
  <div>
    <LoggedNavbar />
    <div>
      <h1
        class="ml-6 my-10 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-green-500 dark:decoration-blue-600"
      >
        Trade Plans
      </h1>
      <div class="flex justify-end mx-6 mb-4">
        <RouterLink to="/calculator">
          <button
            type="button"
            class="text-white bg-green-500 hover:bg-green-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Calculate Plans
          </button>
        </RouterLink>
      </div>
      <PlannerTable />
    </div>
  </div>
</template>

<script setup>
import LoggedNavbar from '../components/LoggedNavbar.vue'
import PlannerTable from '../components/PlannerTable.vue'
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped></style>
