<template>
  <div>
    <LoggedNavbar />
    <div class="mt-6">
      <HomeHeader />
      <MarqueeGlobalStats />
      <CryptoTable />
    </div>
  </div>
</template>

<script setup>
import CryptoTable from '../components/CryptoTable.vue'
import HomeHeader from '../components/HomeHeader.vue'
import LoggedNavbar from '../components/LoggedNavbar.vue'
import MarqueeGlobalStats from '../components/MarqueeGlobalStats.vue'
import { onMounted } from 'vue'

onMounted(() => {
  initFlowbite()
})
</script>

<style lang="scss" scoped></style>
