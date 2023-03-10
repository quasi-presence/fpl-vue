import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from "axios"
import router from '../router'

export const useUserStore = defineStore('user', () => {
  const currentUser = ref(JSON.parse(localStorage.getItem('currentUser')))

  function create(email, password) {
    axios
      .post("http://localhost:3000/api/v1/users", { email: email, password: password})
      .then((response) => {
        if (this.currentUser === undefined) {
          this.login(email, password)
        }
      })
  }

  function login(email, password) {
    axios
      .post("http://localhost:3000/auth/login", { email: email, password: password})
      .then((response) => {
        this.currentUser = response.data
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        router.push({ name: 'users', params: { id: this.currentUser.id } })
      })
  }

  return { currentUser, create, login }
})
