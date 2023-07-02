<template>
  <div>
    <div>
      <a
        href="#"
        class="block p-6 bg-white border w-72 h-72 border-gray-200 rounded-xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total LOSS</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {{ Number(loss).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}
        </p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['loss']
}
</script>

<style lang="scss" scoped></style>
