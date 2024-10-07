<template>
  <div class="ml-64 flex flex-col h-screen">
    <h1
      class="my-10 text-4xl mx-5 font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-green-500 dark:decoration-blue-600"
    >
      Trading Dashboard
    </h1>
    <div class="flex flex-grow">
      <div class="flex flex-col w-[80%] mx-auto justify-evenly">
        <div class="flex justify-evenly">
          <RateCard
            :profitFreq="mainStore.dashboardDatas.fetchDashboard?.profitFreq"
            :lossFreq="mainStore.dashboardDatas.fetchDashboard?.lossFreq"
          />
          <BalanceCard
            :balance="mainStore.dashboardDatas.balance"
            :profit="mainStore.dashboardDatas.fetchDashboard?.profit"
            :loss="mainStore.dashboardDatas.fetchDashboard?.loss"
          />
          <TotalProfitCard :profit="mainStore.dashboardDatas.fetchDashboard?.profit" />
        </div>
        <div class="flex justify-evenly">
          <TotalLossCard :loss="mainStore.dashboardDatas.fetchDashboard?.loss" />
          <TradeActivityCard :activity="mainStore.dashboardDatas.fetchDashboard?.activity" />
          <!-- <ROICard /> -->
        </div>
      </div>
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
import { useMainStore } from '../stores/counter'
import { onBeforeMount } from 'vue'

const mainStore = useMainStore()

onBeforeMount(() => {
  mainStore.fetchDashboard()
})
</script>

<style lang="scss" scoped></style>
