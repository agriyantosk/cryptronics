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
      <div class="w-[60%]">
        <SignupForm />
      </div>
    </div>
    <div class="right-0">
      <img
        src="../assets/beautiful-cryptocurrwncy-concept.jpg"
        alt="Crypto Images"
        class="w-[100%] h-screen"
      />
    </div>
  </div>
</template>

<script setup>
import SignupForm from '../components/SignupForm.vue'
</script>

<style lang="scss" scoped></style>
