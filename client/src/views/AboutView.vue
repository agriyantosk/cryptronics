<template>
  <LoggedNavbar />
  <div class="flex flex-col gap-10">
    <div class="flex item-center justify-center justify-items-center">
      <div class="ml-6 my-10">
        <h1>About Cryptronics</h1>
      </div>
      <div>
        <div class="ml-6 my-10 w-[75%]">
          <h1
            class="my-10 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-green-500 dark:decoration-blue-600"
          >
            About cryptronics
          </h1>
          <h1 class="text-2xl text-white">
            Cryptronics is a comprehensive website dedicated to empowering cryptocurrency investors.
            Our platform offers a range of tools and features to help you efficiently track and
            manage your investments in the dynamic crypto market. With Cryptronics, you can stay
            informed with real-time price updates, take notes, calculate your trade plans, and keep
            track of your crypto portfolio, all in one place. We strive to provide a seamless user
            experience, enabling you to make informed decisions and maximize your investment
            potential in the exciting world of cryptocurrencies.
          </h1>
        </div>
      </div>
    </div>
    <div class="flex justify-evenly mx-6">
      <div
        class="flex flex-col mx-6 text-center gap-4 border rounded-full p-6 transform transition-all duration-300 hover:scale-110"
      >
        <h1 class="text-4xl">1400+</h1>
        <p class="text-md">More than 1400 active traders uses our services</p>
      </div>
      <div
        class="flex flex-col mx-6 text-center gap-4 border rounded-full p-6 transform transition-all duration-300 hover:scale-110"
      >
        <h1 class="text-4xl">1400+</h1>
        <p class="text-md">More than 1400 active traders uses our services</p>
      </div>
      <div
        class="flex flex-col mx-6 text-center gap-4 border rounded-full p-6 transform transition-all duration-300 hover:scale-110"
      >
        <h1 class="text-4xl">1400+</h1>
        <p class="text-md">More than 1400 active traders uses our services</p>
      </div>
      <div
        class="flex flex-col mx-6 text-center gap-4 border rounded-full p-6 transform transition-all duration-300 hover:scale-110"
      >
        <h1 class="text-4xl">1400+</h1>
        <p class="text-md">More than 1400 active traders uses our services</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoggedNavbar from '../components/LoggedNavbar.vue'
</script>

<style lang="scss" scoped></style>
