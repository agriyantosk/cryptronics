import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMainStore = defineStore('main', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    access_token: '',
    firstName: '',
    lastname: ''
  }),
  actions: {
    async login(form) {
      try {
        const response = await axios({
          method: 'POST',
          url: `${this.baseUrl}/user/login`,
          data: form
        })
        message = response.data.message
        this.access_token = response.data.access_token
        this.firstName = response.data.firstName
        this.lastname = response.data.lastName
        localStorage.access_token = this.access_token
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
          text: `${error.response.data.message}`
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
    }
  }
})
