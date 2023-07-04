<template>
  <LoggedNavbar />
  <div class="flex flex-col gap-10">
    <div class="flex justify-center my-10">
      <div class="flex gap-6 w-[75%]">
        <div>
          <div class="flex flex-col gap-10 text-center">
            <h1
              class="text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-green-500 dark:decoration-blue-600"
            >
              About Cryptronics
            </h1>
            <h1 class="text-2xl text-white">
              Cryptronics is a comprehensive website dedicated to empowering cryptocurrency
              investors. Our platform offers a range of tools and features to help you efficiently
              track and manage your investments in the dynamic crypto market. With Cryptronics, you
              can stay informed with real-time price updates, take notes, calculate your trade
              plans, and keep track of your crypto portfolio, all in one place. We strive to provide
              a seamless user experience, enabling you to make informed decisions and maximize your
              investment potential in the exciting world of cryptocurrencies.
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-evenly mx-6">
      <div class="flex justify-center w-[90%]">
        <div
          class="flex flex-col mx-6 w-[25%] text-center gap-4 border rounded-full p-6 transform transition-all duration-300 hover:scale-110"
        >
          <h1 class="text-4xl">10.000+</h1>
          <p class="text-md">Active traders uses this platform</p>
        </div>
        <div
          class="flex flex-col mx-6 w-[25%] text-center gap-4 border rounded-full p-6 transform transition-all duration-300 hover:scale-110"
        >
          <h1 class="text-4xl">50</h1>
          <p class="text-md">Curated cryptocurrencies for your saftey trading experiences</p>
        </div>
        <div
          class="flex flex-col mx-6 w-[25%] text-center gap-4 border rounded-full p-6 transform transition-all duration-300 hover:scale-110"
        >
          <h1 class="text-4xl">100+</h1>
          <p class="text-md">Countries grant their trust to give access</p>
        </div>
        <div
          class="flex flex-col mx-6 w-[25%] text-center gap-4 border rounded-full p-6 transform transition-all duration-300 hover:scale-110"
        >
          <h1 class="text-4xl">500+</h1>
          <p class="text-md">Fresh news everyday to support your market knowledge</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import LoggedNavbar from '../components/LoggedNavbar.vue'

onMounted(() => {
  initFlowbite()
})
</script>

<style lang="scss" scoped></style>
