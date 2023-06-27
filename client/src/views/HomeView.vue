<template>
  <div>
    <MarqueeGlobalStats />
    <LoggedNavbar />
    <div class="mt-6">
      <HomeHeader />
      <CryptoTable />
    </div>
  </div>
</template>

<script setup>
import CryptoTable from '../components/CryptoTable.vue'
import HomeHeader from '../components/HomeHeader.vue'
import LoggedNavbar from '../components/LoggedNavbar.vue'
import MarqueeGlobalStats from '../components/MarqueeGlobalStats.vue'
</script>

<style lang="scss" scoped></style>
