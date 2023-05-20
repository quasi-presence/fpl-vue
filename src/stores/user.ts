import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import router from '../router';
import { User } from '../interfaces/user';

export const useUserStore = defineStore('user', () => {
  const storageKey: string = 'FPL::currentUser';
  const currentUser = ref<User | null>();

  if (currentUser.value == null && localStorage.getItem(storageKey) != null) {
    let storedUserData: string = localStorage.getItem(storageKey) as string;
    currentUser.value = JSON.parse(storedUserData) as User;
  }

  function create(email: string | null, password: string | null): void {
    axios
      .post("http://localhost:3000/api/v1/users", { email: email, password: password})
      .then((response) => {
        if (currentUser === undefined) {
          login(email, password);
        }
      })
  }

  function login(email: string | null, password: string | null): void {
    axios.post("http://localhost:3000/auth/login", { email: email, password: password})
      .then((response) => {
        currentUser.value = response.data as User;
        localStorage.setItem(storageKey, JSON.stringify(currentUser.value));
        router.push({ name: 'user' });
      })
  }

  function logout(): void {
    currentUser.value = null;
    localStorage.removeItem(storageKey);
    router.push({ name: 'home' });
  }

  return { currentUser, create, login, logout };
})
