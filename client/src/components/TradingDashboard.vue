<template>
  <div class="ml-64">
    <h1
      class="ml-6 my-10 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-green-500 dark:decoration-blue-600"
    >
      Trading Dashboard
    </h1>
    <div class="grid grid-cols-3 justify-items-center">
      <BalanceCard />
      <TradeActivityCard />
      <TotalProfitCard />
      <TotalLossCard />
      <ROICard />
      <RateCard />
    </div>
  </div>
</template>

<script setup>
import BalanceCard from './BalanceCard.vue'
import TradeActivityCard from './TradeActivityCard.vue'
import TotalProfitCard from './TotalProfitCard.vue'
import TotalLossCard from './TotalLossCard.vue'
import ROICard from './ROICard.vue'
import RateCard from './RateCard.vue'
</script>

<style lang="scss" scoped></style>
