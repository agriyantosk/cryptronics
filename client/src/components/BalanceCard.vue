<template>
  <div>
    <a
      href="#"
      class="block p-6 bg-white border w-72 h-72 border-gray-200 rounded-xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Balance</h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">{{ Number(balance).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}</p>
    </a>
  </div>
</template>

<script>
export default {
  props: ['balance']
}
</script>

<style lang="scss" scoped></style>
