<template>
  <div>
    <ProfileSideBar />
    <ChangePasswordSection />
  </div>
</template>

<script setup>
import ProfileSideBar from '../components/ProfileSideBar.vue'
import ChangePasswordSection from '../components/ChangePasswordSection.vue'
import { onMounted } from 'vue';

onMounted(() => {
  initFlowbite()
})
</script>

<style lang="scss" scoped></style>
