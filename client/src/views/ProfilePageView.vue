<template>
  <ProfileSideBar />
  <ProfileSection />
</template>

<script setup>
import { onMounted } from 'vue';
import ProfileSection from '../components/ProfileSection.vue'
import ProfileSideBar from '../components/ProfileSideBar.vue'

onMounted(() => {
  initFlowbite()
})
</script>

<style lang="scss" scoped></style>
