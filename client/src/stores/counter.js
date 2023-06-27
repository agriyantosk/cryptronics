import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMainStore = defineStore('main', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    access_token: '',
    firstName: '',
    lastName: '',
    cryptoDatas: '',
    globalStats: '',
    plans: '',
    journals: ''
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
        this.firstName = response.data.firstName
        this.lastName = response.data.lastName
        localStorage.access_token = this.access_token
        localStorage.firstName = response.data.firstName
        localStorage.lastName = response.data.lastName
        this.router.push('/home')
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
    },

    async addPlanner(data) {
      try {
        const response = await axios({
          method: 'POST',
          url: `${this.baseUrl}/planner/add`,
          data: data,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `${response.data.message}`,
          showConfirmButton: false,
          timer: 1500
        })
        this.router.push('/planner')
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`
        })
      }
    },

    async fetchPlans() {
      try {
        const response = await axios({
          method: 'GET',
          url: `${this.baseUrl}/planner/fetch`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.plans = response.data
      } catch (error) {
        console.log(error)
      }
    },

    async deletePlans(id) {
      try {
        const response = await axios({
          method: 'DELETE',
          url: `${this.baseUrl}/planner/delete`,
          data: { id },
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `${response.data.message}`,
          showConfirmButton: false,
          timer: 1500
        })
        await this.fetchPlans()
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`
        })
      }
    },

    async executePlan(id) {
      Swal.fire({
        title: 'Do you want to directly execute your trade?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `Customize`
      }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          try {
            const response = await axios({
              method: 'PATCH',
              url: `${this.baseUrl}/planner/execute`,
              data: { id },
              headers: {
                access_token: localStorage.getItem('access_token')
              }
            })
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: `${response.data.message}`,
              showConfirmButton: false,
              timer: 1500
            })
            const addJournal = await axios({
              method: 'POST',
              url: `${this.baseUrl}/journal/add`,
              data: response.data.findPlan,
              headers: {
                access_token: localStorage.getItem('access_token')
              }
            })
            this.router.push('/journal')
          } catch (error) {
            console.log(error)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${error.response.data.message}`
            })
          }
        } else if (result.isDenied) {
          // nanti push ke add journal
        }
      })
    },

    async addJournal(data) {
      try {
        const response = await axios({
          method: 'POST',
          url: `${this.baseUrl}/journal/add`,
          data: data,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.router.push('/journal')
      } catch (error) {
        console.log(error)
      }
    },

    async fetchJournals() {
      try {
        const response = await axios({
          method: 'GET',
          url: `${this.baseUrl}/journal/fetch`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.journals = response.data
      } catch (error) {
        console.log(error)
      }
    },

    async deleteJournal(id) {
      try {
        const response = await axios({
          method: 'DELETE',
          url: `${this.baseUrl}/journal/delete`,
          data: { id },
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `${response.data.message}`,
          showConfirmButton: false,
          timer: 1500
        })
        this.fetchJournals()
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`
        })
      }
    },

    async logout() {
      try {
        localStorage.clear()
        this.router.push('/')
      } catch (error) {
        console.log(error)
      }
    }
  }
})
