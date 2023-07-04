<template>
  <div>
    <ProfileSideBar />
    <TradingDashboard />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import ProfileSideBar from '../components/ProfileSideBar.vue'
import TradingDashboard from '../components/TradingDashboard.vue'

onMounted(() => {
  initFlowbite()
})
</script>

<style lang="scss" scoped></style>
