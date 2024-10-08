<template>
  <div>
    <LoggedNavbar />
  </div>
  <div class="flex flex-col justify-center mx-10">
    <div class="flex flex-col items-center my-5 md:my-10 gap-3">
      <h1 class="text-white font-bold text-2xl md:text-5xl">Cryptocurrency Launch Calendar 🚀</h1>
      <p class="text-white font-md text-md md:text-2xl">
        Service for searching every events that may affect the value of cryptocurrencies.
      </p>
    </div>
    <div v-if="mainStore.loading === true">
      <LoadingSpinner />
    </div>
    <div v-else>
      <div class="md:flex-none flex flex-col md:grid md:grid-cols-4 gap-4 w-full">
        <div
          v-for="data in mainStore.coinLaunches"
          class="w-full max-w-sm bg-[#181818] border px-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="flex flex-col items-center py-10">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://upload.wikimedia.org/wikipedia/commons/a/af/Question_mark.png"
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-bold text-center text-white dark:text-white">
              {{ data.title.en }}
            </h5>
            <span class="text-sm text-green-500 font-bold dark:text-gray-200">{{
              data.coins[0].fullname
            }}</span>
            <br />
            <br />
            <span class="text-sm font-bold underline text-gray-200 dark:text-gray-200"
              >Rank: #{{ data.coins[0].rank }}</span
            >
            <span class="text-sm text-gray-200 dark:text-gray-200">
              Event Date: {{ new Date(data.date_event).toLocaleDateString('id-ID') }}</span
            >
            <span class="text-sm text-gray-200 dark:text-gray-200">
              Created Date: {{ new Date(data.created_date).toLocaleDateString('id-ID') }}</span
            >
            <div class="flex mt-4 gap-2">
              <a
                :href="data.proof"
                target="_blank"
                class="inline-flex items-center px-1.5 py-1 md:px-4 md:py-2 text-xs md:text-sm font-medium text-center text-green-500 bg-transparent border border-green-500 rounded-2xl hover:bg-white"
                >Proof</a
              >
              <a
                href="#"
                @click.prevent="
                  mainStore.addLaunchWatchlist({
                    title: data.title.en,
                    cryptoName: data.coins[0].fullname,
                    rank: data.coins[0].rank,
                    symbol: data.coins[0].symbol,
                    eventDate: data.date_event,
                    createdDate: data.created_date,
                    proof: data.proof,
                    source: data.source
                  })
                "
                class="inline-flex items-center px-1.5 py-1 md:px-4 md:py-2 text-xs md:text-sm font-medium text-center text-white bg-green-500 border border-green-500 rounded-2xl hover:bg-green-400"
                >+ Watchlist</a
              >
              <a
                :href="data.source"
                target="_blank"
                class="inline-flex items-center px-1.5 py-1 md:px-4 md:py-2 text-xs md:text-sm font-medium text-center text-green-500 bg-transparent border border-green-500 rounded-2xl hover:bg-white"
                >Source</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted } from 'vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import LoggedNavbar from '../components/LoggedNavbar.vue'
import { useMainStore } from '../stores/counter'

const mainStore = useMainStore()

onBeforeMount(() => {
  mainStore.fetchCoinLaunch()
})

onMounted(() => {
  initFlowbite()
})
</script>

<style lang="scss" scoped></style>
