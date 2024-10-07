<template>
  <div>
    <nav class="bg-[#181818] border-b border-gray-700 py-2">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <RouterLink to="/home">
          <a href="#" class="flex items-center">
            <img
              src="https://cryptologos.cc/logos/celo-celo-logo.png"
              class="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span class="self-center hidden md:block text-2xl font-semibold whitespace-nowrap dark:text-white"
              >Cryptronics</span
            >
          </a>
        </RouterLink>
        <div class="flex items-center md:order-2">
          <p class="text-white mr-4">Hi, {{ userData.firstName }}</p>
          <button
            type="button"
            class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full"
              src="https://i.pinimg.com/280x280_RS/55/96/4e/55964ebb02710d6b9ce1c26f1d857906.jpg"
              alt="user photo"
            />
          </button>
          <!-- Dropdown menu -->
          <div
            class="z-50 hidden my-4 text-base list-none bg-[#181818] divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div class="px-4 py-3">
              <span class="block text-sm text-white truncate dark:text-gray-400"
                >{{ userData.firstName }} {{ userData.lastName }}</span
              >
            </div>
            <ul class="py-2" aria-labelledby="user-menu-button">
              <li>
                <RouterLink to="/profile">
                  <a href="#" class="block px-4 py-2 text-sm text-white hover:bg-green-400"
                    >Profile</a
                  >
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/watchlist">
                  <a href="#" class="block px-4 py-2 text-sm text-white hover:bg-green-400"
                    >Watchlists</a
                  >
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/planner">
                  <a href="#" class="block px-4 py-2 text-sm text-white hover:bg-green-400"
                    >Plans</a
                  >
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/journal">
                  <a href="#" class="block px-4 py-2 text-sm text-white hover:bg-green-400"
                    >Journal</a
                  >
                </RouterLink>
              </li>
              <li>
                <a
                  @click.prevent="mainStore.logout()"
                  href="#"
                  class="block px-4 py-2 text-sm text-white hover:bg-green-400"
                  >Sign out</a
                >
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#181818] md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#181818] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <RouterLink to="/home">
                <a
                  href="#"
                  :class="
                    route.path === '/home'
                      ? 'block py-2 pl-3 pr-4 text-green-500 rounded md:bg-transparent md:hover:text-green-400 md:p-0 md:dark:text-blue-500'
                      : 'block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:hover:text-green-400 md:p-0 md:dark:text-blue-500'
                  "
                  aria-current="page"
                  >Home</a
                >
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/about">
                <a
                  href="#"
                  :class="
                    route.path === '/about'
                      ? 'block py-2 pl-3 pr-4 text-green-500 rounded md:bg-transparent md:hover:text-green-400 md:p-0 md:dark:text-blue-500'
                      : 'block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:hover:text-green-400 md:p-0 md:dark:text-blue-500'
                  "
                  >About</a
                >
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/news">
                <a
                  href="#"
                  :class="
                    route.path === '/news'
                      ? 'block py-2 pl-3 pr-4 text-green-500 rounded md:bg-transparent md:hover:text-green-400 md:p-0 md:dark:text-blue-500'
                      : 'block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:hover:text-green-400 md:p-0 md:dark:text-blue-500'
                  "
                  >News</a
                >
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/launch">
                <div class="flex items-center">
                  <a
                    href="#"
                    :class="
                      route.path === '/launch'
                        ? 'block py-2 pl-3 pr-4 text-green-500 rounded md:bg-transparent md:hover:text-green-400 md:p-0 md:dark:text-blue-500'
                        : 'block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:hover:text-green-400 md:p-0 md:dark:text-blue-500'
                    "
                    >Coin Launch</a
                  >
                  <span
                    class="inline-flex items-center justify-center px-3 text-sm font-medium text-white bg-green-400 rounded-full dark:bg-gray-700 dark:text-gray-300"
                    >New</span
                  >
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useMainStore } from '../stores/counter'

const route = useRoute()
const mainStore = useMainStore()
const userData = JSON.parse(localStorage.getItem('userInfo'))
</script>

<style lang="scss" scoped></style>
