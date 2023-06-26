<template>
  <div>
    <form @submit="handleSubmit" class="text-center">
      <div class="mb-6">
        <input
          type="email"
          v-model="form.email"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-green-500 focus:border-green-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
          placeholder="Your Email"
          required
        />
      </div>
      <div class="mb-6">
        <input
          type="password"
          v-model="form.password"
          placeholder="Password"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-green-500 focus:border-green-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
          required
        />
      </div>
      <button
        type="submit"
        class="text-white w-full bg-green-500 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-2xl text-sm px-5 py-4 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Log In
      </button>
    </form>
  </div>
</template>

<script setup>
import { useMainStore } from '../stores/counter'

const form = {
  email: '',
  password: ''
}

const mainStore = useMainStore()

const handleSubmit = (event) => {
  event.preventDefault()
  mainStore.login(form)
}
</script>

<style lang="scss" scoped></style>
