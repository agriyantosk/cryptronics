<template>
  <div class="flex justify-around">
    <div class="w-[50%] flex flex-col justify-center items-center gap-10">
      <div class="px-4 py-4">
        <RouterLink to="/">
          <a href="#" class="flex items-center">
            <img
              src="https://cryptologos.cc/logos/celo-celo-logo.png"
              class="h-8 mr-3"
              alt="Cryptronics Logo"
            />
            <span
              class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white"
              >Cryptronics</span
            >
          </a>
        </RouterLink>
      </div>
      <div class="flex flex-col items-center gap-4">
        <h1 class="font-bold text-7xl text-white">Hi there!</h1>
        <h1 class="font-medium text-lg text-white">Welcome to Cryptronics.</h1>
      </div>

      <div class="w-[60%]">
        <SigninForm />
      </div>
      <div>
        <h1>
          Don't have an account?
          <RouterLink to="/sign-up">
            <a href="#" class="underline text-blue-500">Sign up</a>
          </RouterLink>
        </h1>
      </div>
    </div>
    <div class="right-0">
      <img
        src="../assets/hud-user-interface-technology-spaceship-virtual-reality-game-with-infographic-chart-navigation-button.png"
        alt="Crypto Images"
        class="w-[100%] h-screen"
      />
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import SigninForm from '../components/SigninForm.vue'
</script>

<style lang="scss" scoped></style>
