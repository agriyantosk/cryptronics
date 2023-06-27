<template>
  <div class="h-screen">
    <MarqueeGlobalStats />
    <Navbar />
    <div class="flex justify-center items-center mx-[10%]">
      <div class="flex flex-col gap-3">
        <div>
          <p class="text-white font font-medium text-2xl mb-2">Get 25% first visit discount</p>
          <h1 class="text-white font font-extrabold text-7xl mb-2">Track Your</h1>
          <h1 class="text-white font font-extrabold text-7xl mb-2">Crypto Portfolio</h1>
          <p class="text-white font font-light text-2xl mb-2">
            Explore the market and easily track each and every one of your trade
          </p>
        </div>
        <RouterLink to="/sign-in">
          <button class="text-white bg-green-500 rounded-lg px-5 py-3 w-64 hover:bg-green-400">
            Let's Get Started ->
          </button>
        </RouterLink>
        <div>
          <p>1400+ Active Users | 100+ Listed Coins</p>
        </div>
      </div>
      <div>
        <img
          src="../assets/df6151ed48f82d9b3b16ae65ab965f6d-transformed.png"
          alt="Crypto Chart Picture"
          class="w-[100%] h-[100%]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import { RouterLink } from 'vue-router'
import { useMainStore } from '../stores/counter'
import MarqueeGlobalStats from '../components/MarqueeGlobalStats.vue'
const mainStore = useMainStore()
</script>

<style scoped></style>
