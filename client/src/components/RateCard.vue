<template>
  <div>
    <a
      href="#"
      class="p-4 flex flex-col gap-4 bg-gray-800 border w-80 h-80 border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 class="text-2xl font-bold tracking-tight text-white dark:text-white">
        Profit/Loss Rate
      </h5>
      <div class="chart-container w-[50%] h-[50%] mx-auto">
        <canvas id="chart" class="w-full h-full"></canvas>
      </div>
      <div class="flex flex-col text-center gap-2">
        <div class="flex justify-between border-b border-b-gray-500 pb-2">
          <div class="flex gap-2">
            <div class="bg-[#309f6e] w-5 h-5 rounded-md"></div>
            <p class="font-normal text-white dark:text-gray-400">Profit</p>
          </div>
          <div>
            <p class="font-normal text-white dark:text-gray-400">
              {{ this.profitRate.toFixed(2) }}%
            </p>
          </div>
        </div>
        <div class="flex justify-between pt-1">
          <div class="flex gap-2">
            <div class="bg-red-500 w-5 h-5 rounded-md"></div>
            <p class="font-normal text-white dark:text-gray-400">Loss</p>
          </div>
          <div>
            <p class="font-normal text-white dark:text-gray-400">
              {{ this.lossRate.toFixed(2) }}%
            </p>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import Chart from 'chart.js/auto'
export default {
  props: ['profitFreq', 'lossFreq'],
  data() {
    return {
      profitRate: (this.profitFreq / (this.profitFreq + this.lossFreq)) * 100,
      lossRate: (this.lossFreq / (this.profitFreq + this.lossFreq)) * 100
    }
  },
  mounted() {
    const data = {
      labels: ['Profit', 'Loss'],
      datasets: [
        {
          data: [this.profitRate, this.lossRate],
          backgroundColor: ['#309f6e', 'rgb(239 68 68)'],
          borderWidth: 0,
          borderRadius: 50,
          cutout: '85%',
          hoverOffset: 4
        }
      ]
    }

    const config = {
      type: 'doughnut',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    }

    const ctx = document.getElementById('chart')
    const chart = new Chart(ctx, config)
  }
}
</script>

<style lang="scss" scoped></style>
