<template>
  <div>
    <div>
      <a
        href="#"
        class="flex flex-col p-4 bg-gray-800 border w-80 h-80 border-gray-200 rounded-xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="text-2xl font-bold tracking-tight text-white dark:text-white">Total Trades</h5>
        <div class="flex flex-col flex-grow justify-center">
          <p class="font-bold text-6xl rounded-full p-12 border-4 text-white mx-auto dark:text-gray-400">
            {{ activity }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['activity']
}
</script>

<style lang="scss" scoped></style>
