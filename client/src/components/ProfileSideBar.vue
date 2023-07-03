<template>
  <div>
    <aside
      id="separator-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-800 dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <RouterLink to="/home">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-white rounded-lg dark:text-white hover:text-green-400 dark:hover:bg-gray-700"
              >
                <span>← </span>
                <span class="flex-1 ml-3 hover:underline whitespace-nowrap">Back to Home</span>
              </a>
            </li>
          </RouterLink>
          <li>
            <RouterLink to="/profile">
              <a
                href="#"
                :class="
                  route.path === '/profile'
                    ? 'flex items-center p-2 text-green-500 bg-white rounded-lg dark:text-white dark:hover:bg-gray-700'
                    : 'flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-green-500 dark:hover:bg-gray-700'
                "
              >
                <svg
                  aria-hidden="true"
                  :class="
                    route.path === '/profile'
                      ? 'flex-shrink-0 w-6 h-6 text-green-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                      : 'flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">My Profile</span>
              </a>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/profile/balance">
              <a
                href="#"
                :class="
                  route.path === '/profile/balance'
                    ? 'flex items-center p-2 text-green-500 bg-white rounded-lg dark:text-white dark:hover:bg-gray-700'
                    : 'flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-green-500 dark:hover:bg-gray-700'
                "
              >
                <svg height="28" viewBox="0 0 48 48" width="28" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h48v48h-48z" fill="none" />
                  <path
                    :fill="route.path === '/profile/balance' ? '#22C55E' : '#FFFFFF'"
                    d="M42 36v2c0 2.21-1.79 4-4 4h-28c-2.21 0-4-1.79-4-4v-28c0-2.21 1.79-4 4-4h28c2.21 0 4 1.79 4 4v2h-18c-2.21 0-4 1.79-4 4v16c0 2.21 1.79 4 4 4h18zm-18-4h20v-16h-20v16zm8-5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
                  />
                </svg>
                <span class="flex-1 ml-2 whitespace-nowrap">Deposit/Withdraw</span>
              </a>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/profile/change-password">
              <a
                href="#"
                :class="
                  route.path === '/profile/change-password'
                    ? 'flex items-center p-2 text-green-500 bg-white rounded-lg dark:text-white dark:hover:bg-gray-700'
                    : 'flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-green-500 dark:hover:bg-gray-700'
                "
              >
                <svg
                  enable-background="new 0 0 32 32"
                  class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  height="32px"
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 32 32"
                  width="32px"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g id="lock">
                    <path
                      d="M25,13V9c0-4.971-4.029-9-9-9c-4.971,0-9,4.029-9,9v4c-1.657,0-3,1.343-3,3v3v1v2v1c0,4.971,4.029,9,9,9h6   c4.971,0,9-4.029,9-9v-1v-2v-1v-3C28,14.342,26.656,13,25,13z M9,9c0-3.866,3.134-7,7-7c3.866,0,7,3.134,7,7v4h-2V9.002   c0-2.762-2.238-5-5-5c-2.762,0-5,2.238-5,5V13H9V9z M20,9v0.003V13h-8V9.002V9c0-2.209,1.791-4,4-4C18.209,5,20,6.791,20,9z M26,19   v1v2v1c0,3.859-3.141,7-7,7h-6c-3.859,0-7-3.141-7-7v-1v-2v-1v-3c0-0.552,0.448-1,1-1c0.667,0,1.333,0,2,0h14c0.666,0,1.332,0,2,0   c0.551,0,1,0.448,1,1V19z"
                      :fill="route.path === '/profile/change-password' ? '#22C55E' : '#FFFFFF'"
                    />
                    <path
                      d="M16,19c-1.104,0-2,0.895-2,2c0,0.607,0.333,1.76,0.667,2.672c0.272,0.742,0.614,1.326,1.333,1.326   c0.782,0,1.061-0.578,1.334-1.316C17.672,22.768,18,21.609,18,21C18,19.895,17.104,19,16,19z"
                      :fill="route.path === '/profile/change-password' ? '#22C55E' : '#FFFFFF'"
                    />
                  </g>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Change Password</span>
              </a>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/profile/dashboard">
              <a
                href="#"
                :class="
                  route.path === '/profile/dashboard'
                    ? 'flex items-center p-2 text-green-500 bg-white rounded-lg dark:text-white dark:hover:bg-gray-700'
                    : 'flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-green-500 dark:hover:bg-gray-700'
                "
              >
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  :fill="route.path === '/profile/dashboard' ? '#22C55E' : '#FFFFFF'"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Trading Dashboard</span>
              </a>
            </RouterLink>
          </li>
        </ul>
        <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-white transition duration-75 rounded-lg hover:bg-green-500 dark:text-white group"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:group-hover:text-white dark:text-gray-400"
                focusable="false"
                data-prefix="fas"
                data-icon="gem"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"
                ></path>
              </svg>
              <span class="ml-4">Upgrade to Pro</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-white transition duration-75 rounded-lg hover:bg-green-500 dark:text-white group"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="ml-3">Help</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-red-500 transition duration-75 rounded-lg hover:bg-white dark:text-white group"
            >
              <svg
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
                class="flex-shrink-0 w-6 h-6 transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
              >
                <path
                  fill="#EF4444"
                  d="M32 464C32 490.5 53.5 512 80 512h288c26.5 0 48-21.5 48-48V128H32V464zM304 208C304 199.1 311.1 192 320 192s16 7.125 16 16v224c0 8.875-7.125 16-16 16s-16-7.125-16-16V208zM208 208C208 199.1 215.1 192 224 192s16 7.125 16 16v224c0 8.875-7.125 16-16 16s-16-7.125-16-16V208zM112 208C112 199.1 119.1 192 128 192s16 7.125 16 16v224C144 440.9 136.9 448 128 448s-16-7.125-16-16V208zM432 32H320l-11.58-23.16c-2.709-5.42-8.25-8.844-14.31-8.844H153.9c-6.061 0-11.6 3.424-14.31 8.844L128 32H16c-8.836 0-16 7.162-16 16V80c0 8.836 7.164 16 16 16h416c8.838 0 16-7.164 16-16V48C448 39.16 440.8 32 432 32z"
                />
              </svg>
              <span class="ml-3">Delete Account</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()
</script>

<style lang="scss" scoped></style>
