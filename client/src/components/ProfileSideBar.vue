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
            <a
              href="#"
              class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-green-500 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
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
              <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-green-500 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                class="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Trading Dashboard</span>
            </a>
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
        </ul>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped></style>
