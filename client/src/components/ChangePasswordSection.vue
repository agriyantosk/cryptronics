<template>
  <div class="ml-64">
    <h1
      class="ml-6 my-10 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl underline underline-offset-3 decoration-8 decoration-green-500 dark:decoration-blue-600"
    >
      Edit Profile
    </h1>
    <form class="ml-16 w-[60%]" @submit="handleSubmit">
      <div>
        <div class="mb-6">
          <label for="base-input" class="block mb-2 text-sm font-medium text-white dark:text-white"
            >Current Password</label
          >
          <input
            type="password"
            id="base-input"
            v-model="data.currentPassword"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="mb-6">
          <label for="base-input" class="block mb-2 text-sm font-medium text-white dark:text-white"
            >New Password</label
          >
          <input
            type="password"
            id="base-input"
            v-model="data.newPassword"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div class="mb-6">
          <label for="base-input" class="block mb-2 text-sm font-medium text-white dark:text-white"
            >New Password</label
          >
          <input
            type="password"
            id="base-input"
            v-model="data.newPassword2"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Change Password
      </button>
    </form>
  </div>
</template>

<script setup>
import { useMainStore } from '../stores/counter';

const mainStore = useMainStore()

const data = {
  currentPassword: '',
  newPassword: '',
  newPassword2: ''
}

const handleSubmit = (event) => {
    event.preventDefault()
    if (data.newPassword !== data.newPassword2) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Password didn't match!`
        })
    } else {
        mainStore.changePassword(data)
    }
}
</script>

<style lang="scss" scoped></style>
