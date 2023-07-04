<template>
  <div>
    <ProfileSideBar />
    <EditProfileSection />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import EditProfileSection from '../components/EditProfileSection.vue'
import ProfileSideBar from '../components/ProfileSideBar.vue'

onMounted(() => {
  initFlowbite()
})
</script>

<style lang="scss" scoped></style>
