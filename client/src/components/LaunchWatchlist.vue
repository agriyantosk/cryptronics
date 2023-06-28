<template>
  <div>
    <div class="flex-none grid grid-cols-4 gap-4">
      <div
        v-for="data in mainStore.launchWatchlists"
        class="w-full max-w-sm bg-[#181818] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="flex flex-col items-center py-10">
          <img
            class="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="https://upload.wikimedia.org/wikipedia/commons/a/af/Question_mark.png"
            alt="Bonnie image"
          />
          <h5 class="mb-1 text-xl font-bold text-white dark:text-white">
            {{ data.title }}
          </h5>
          <span class="text-sm text-green-500 font-bold dark:text-gray-200">{{
            data.cryptoName
          }}</span>
          <br />
          <br />
          <span class="text-sm text-gray-200 dark:text-gray-200"
            >Rank: #{{ data.rank }}</span
          >
          <span class="text-sm text-gray-200 dark:text-gray-200">
            Event Date: {{ new Date(data.eventDate).toLocaleDateString('id-ID') }}</span
          >
          <span class="text-sm text-gray-200 dark:text-gray-200">
            Created Date: {{ new Date(data.createdDate).toLocaleDateString('id-ID') }}</span
          >
          <div class="flex mt-4 space-x-3 md:mt-6">
            <a
              :href="data.proof"
              target="_blank"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-green-500 bg-transparent border border-green-500 rounded-2xl hover:bg-white"
              >Proof</a
            >
            <a
              href="#"
              @click.prevent="
                mainStore.deleteLaunchWatchlist(data.id)
              "
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-500 border border-green-500 rounded-2xl hover:bg-green-400"
              >Delete Watchlist</a
            >
            <a
              :href="data.source"
              target="_blank"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-green-500 bg-transparent border border-green-500 rounded-2xl hover:bg-white"
              >Source</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted } from 'vue'
import { useMainStore } from '../stores/counter'
const mainStore = useMainStore()

onBeforeMount(() => {
  mainStore.fetchLaunchWatchlist()
})

onMounted(() => {
  initFlowbite()
})
</script>

<style lang="scss" scoped></style>
