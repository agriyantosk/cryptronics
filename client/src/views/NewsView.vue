<template>
  <div>
    <LoggedNavbar />
    <div class="mx-6">
      <MarqueeGlobalStats />
      <h1
        class="mt-10 mb-4 text-2xl md:text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-green-500 dark:decoration-blue-600"
      >
        News
      </h1>
      <p class="text-white text-md md:text-xl">
        Insights into the biggest events shaping the crypto industry.
      </p>
      <div class="mt-5 md:mt-10 gap-6">
        <NewsCard />
      </div>
    </div>
  </div>
</template>

<script setup>
import LoggedNavbar from '../components/LoggedNavbar.vue'
import NewsCard from '../components/NewsCard.vue'
import MarqueeGlobalStats from '../components/MarqueeGlobalStats.vue'
import { onMounted } from 'vue'

onMounted(() => {
  initFlowbite()
})
</script>

<style lang="scss" scoped></style>
