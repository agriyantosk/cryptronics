<template>
  <div>
    <a
      href="#"
      class="p-4 flex flex-col bg-gray-800 border w-80 h-80 border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 class="text-2xl font-bold tracking-tight text-white dark:text-white">Balance</h5>
      <div class="flex flex-col justify-center flex-grow">
        <div class="flex flex-col items-center mx-auto gap-10">
          <div>
            <p class="font-bold text-3xl underline text-white dark:text-gray-400">
              {{ Number(balance).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}
            </p>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <p
                :class="
                  this.gap > 0
                    ? 'font-bold text-xl text-green-500 dark:text-gray-400'
                    : 'font-bold text-xl text-red-500 dark:text-gray-400'
                "
              >
                {{
                  Number(this.gap).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
                }}
              </p>
              <svg
                data-name="Layer 1"
                id="Layer_1"
                width="20"
                height="20"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                :transform="this.gap < 0 ? 'rotate(180)' : ''"
              >
                <path
                  d="M256,34,432,210l-21.2,21.21L271,91.4V478H241V91.4L101.16,231.25,80,210Z"
                  :fill="this.gap > 0 ? '#309f6e' : '#EF4444'"
                />
              </svg>
            </div>
            <p class="font-bold text-xl text-center text-white dark:text-gray-400">
              From your initial deposits
            </p>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['balance', 'profit', 'loss'],
  data() {
    return {
      gap: (+this.profit + +this.loss)
    }
  }
}
</script>

<style lang="scss" scoped></style>
