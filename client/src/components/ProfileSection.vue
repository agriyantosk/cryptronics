<template>
  <div class="ml-64 pl-16">
    <h1
      class="my-10 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-green-500 dark:decoration-blue-600"
    >
      My Profile
    </h1>
    <div class="border border-gray-700 rounded-lg p-10 mx-16">
      <div class="flex flex-col gap-16 ml-16">
        <div class="flex justify-between">
          <div class="flex items-center gap-4">
            <div class="items-start">
              <img
                class="w-24 h-24 mb-3 border border-gray-700 rounded-full shadow-lg"
                src="https://cryptologos.cc/logos/celo-celo-logo.png"
                alt="Bonnie image"
              />
            </div>
            <div>
              <h1 class="text-white">{{ userData.firstName }} {{ userData.lastName }}</h1>
            </div>
          </div>
          <div>
            <RouterLink to="">
              <a
                href="#"
                class="flex items-center p-2 text-green-500 underline rounded-lg dark:text-white hover:text-green-400 dark:hover:bg-gray-700"
              >
                <svg
                  class="feather feather-edit"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Edit</span>
              </a>
            </RouterLink>
          </div>
        </div>
        <!-- BAGIAN PERSONAL INFO -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h1 class="text-md">First Name</h1>
            <p class="text-white font-md text-lg">{{ userData.firstName }}</p>
          </div>
          <div>
            <h1>Last Name</h1>
            <p class="text-white font-md text-lg">{{ userData.lastName }}</p>
          </div>
          <div>
            <h1>Email</h1>
            <p class="text-white font-md text-lg">{{ userData.email }}</p>
          </div>
          <div>
            <h1>Age</h1>
            <p class="text-white font-md text-lg">{{ userData.age }}</p>
          </div>
          <div>
            <h1>Address</h1>
            <p class="text-white font-md text-lg">{{ userData.address }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const userData = JSON.parse(localStorage.getItem('userInfo'))
</script>

<style lang="scss" scoped></style>
