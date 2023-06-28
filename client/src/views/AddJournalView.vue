<template>
  <div>
    <LoggedNavbar />
    <h1
      class="ml-6 my-10 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-green-500 dark:decoration-blue-600"
    >
      Add Journal
    </h1>
    <JournalForm />
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useMainStore } from '../stores/counter'
import LoggedNavbar from '../components/LoggedNavbar.vue'
import JournalForm from '../components/JournalForm.vue'

const mainStore = useMainStore()

import { onMounted } from 'vue'

onMounted(() => {
  initFlowbite()
})
</script>

<style lang="scss" scoped></style>
