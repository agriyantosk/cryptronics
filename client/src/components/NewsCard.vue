<template>
  <div v-if="mainStore.loading === true">
    <LoadingSpinner />
  </div>
  <div v-else v-for="data in mainStore.newsDatas" class="flex justify-center">
    <a
      :href="data.link"
      target="_blank"
      class="w-full py-6 shadow hover:bg-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div class="flex items-center gap-10 w-full">
        <div class="flex flex-col gap-5 w-full">
          <div>
            <div>
              <img :src="data.image_url" class="h-max w-full object object-contain" alt="Flowbite Logo" />
            </div>
            <div class="text-xs md:text-xl flex w-full justify-end">
              {{ new Date(data.pubDate).toLocaleDateString('id-ID') }}
            </div>
          </div>
          <h5 class="mb-2 text-xs md:text-2xl font-bold tracking-tight text-white dark:text-white">
            {{ data.title }}
          </h5>
          <div>
            <p class="font-normal text-white dark:text-gray-400">
              {{ data.content.length > 350 ? data.content.slice(0, 350) + '...' : data.content }}
            </p>
            <p class="font-bold text-white dark:text-gray-400">
              {{ data.pubDate.split(' ')[1] }} | {{ data.source_id }}
            </p>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useMainStore } from '../stores/counter'
import LoadingSpinner from './LoadingSpinner.vue'

const mainStore = useMainStore()

onBeforeMount(() => {
  mainStore.fetchNews()
})
</script>

<style lang="scss" scoped></style>
