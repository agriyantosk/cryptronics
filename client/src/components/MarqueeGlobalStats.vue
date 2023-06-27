<template>
  <div class="py-2">
    <marquee behavior="scroll" direction="left">
      <div class="flex gap-3">
        Cryptos: <span class="text-green-400">{{ mainStore.globalStats.data?.totalCoins }}</span> |
        Exchanges:
        <span class="text-green-400">{{ mainStore.globalStats.data?.totalExchanges }}</span> |
        Market Cap:
        <span class="text-green-400">{{
          Number(mainStore.globalStats.data?.totalMarketCap).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          })
        }}</span>
        | 24h Volume:
        <span class="text-green-400">{{
          Number(mainStore.globalStats.data?.total24hVolume).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          })
        }}</span>
        | BTC Dominance:
        <span class="text-green-400">{{ mainStore.globalStats.data?.btcDominance }}%</span>
      </div>
    </marquee>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useMainStore } from '../stores/counter'
const mainStore = useMainStore()
onBeforeMount(() => {
  mainStore.fetchGlobalStats()
})
</script>

<style lang="scss" scoped></style>
