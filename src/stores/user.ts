import { defineStore } from 'pinia';
import { ref } from 'vue';
import { IUser } from '../interfaces';

export const useUserStore = defineStore('user', () => {
  const storageKey: string = 'FPL::currentUser';
  const currentUser = ref<IUser | null>();
  const sidebarOpen = ref<boolean>(true);
  const profileMenuOpen = ref<boolean>(false);

  if (currentUser.value == null && localStorage.getItem(storageKey) != null) {
    let storedUserData: string = localStorage.getItem(storageKey) as string;
    currentUser.value = JSON.parse(storedUserData) as IUser;
  }

  function updateCurrentUser(user: IUser | null): void {
    currentUser.value = user;

    if (currentUser.value == null) {
      localStorage.removeItem(storageKey);
    } else {
      localStorage.setItem(storageKey, JSON.stringify(currentUser.value));
    }
  }

  return { currentUser, updateCurrentUser, sidebarOpen, profileMenuOpen };
})
