<template>
  <div v-for="data in mainStore.newsDatas">
    <a
      :href="data.link"
      class="block w-[70%] p-6 shadow hover:bg-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div class="flex items-center gap-10">
        <div>{{ new Date(data.pubDate).toLocaleDateString('id-ID') }}</div>
        <div>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            {{ data.title }}
          </h5>
          <p class="font-normal text-white dark:text-gray-400 mb-10">
            {{ data.content.length > 350 ? data.content.slice(0, 350) + '...' : data.content }}
          </p>
          <p class="font-bold text-white dark:text-gray-400">
            {{ data.pubDate.split(' ')[1] }} | {{ data.source_id }}
          </p>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useMainStore } from '../stores/counter'

const mainStore = useMainStore()

onBeforeMount(() => {
  mainStore.fetchNews()
})
</script>

<style lang="scss" scoped></style>
