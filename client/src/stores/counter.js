import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMainStore = defineStore('main', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    access_token: '',
    cryptoDatas: '',
    globalStats: ''
  }),
  actions: {
    async login(form) {
      try {
        const response = await axios({
          method: 'POST',
          url: `${this.baseUrl}/user/login`,
          data: form
        })
        this.access_token = response.data.access_token
        localStorage.access_token = this.access_token
        localStorage.firstName = this.firstName
        localStorage.lastName = this.lastName
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Login Successfull',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error?.response?.data?.message}`
        })
      }
    },

    async register(data) {
      try {
        const response = await axios({
          method: 'POST',
          url: `${this.baseUrl}/user/register`,
          data: data
        })
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `${response.data.message}`,
          showConfirmButton: false,
          timer: 1500
        })
        this.router.push('/sign-in')
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`
        })
      }
    },

    async fetchCryptoData() {
      try {
        const response = await axios({
          method: 'GET',
          url: 'https://coinranking1.p.rapidapi.com/coins',
          params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: '24h',
            'tiers[0]': '1',
            orderBy: 'marketCap',
            orderDirection: 'desc',
            limit: '50',
            offset: '0'
          },
          headers: {
            'X-RapidAPI-Key': '33a26c0319msh7b93f6ebe78b83fp18209djsnb945895de07c',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
          }
        })
        this.cryptoDatas = response.data
      } catch (error) {
        console.log(error)
      }
    },

    async fetchGlobalStats() {
      try {
        const response = await axios({
          method: 'GET',
          url: 'https://coinranking1.p.rapidapi.com/stats',
          params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl'
          },
          headers: {
            'X-RapidAPI-Key': '33a26c0319msh7b93f6ebe78b83fp18209djsnb945895de07c',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
          }
        })
        this.globalStats = response.data
      } catch (error) {
        console.log(error)
      }
    }
  }
})
