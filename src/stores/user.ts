import { defineStore } from 'pinia';
import { ref } from 'vue';
import { IUser, IUserAlert } from '../interfaces';

export const useUserStore = defineStore('user', () => {
  const authStorageKey: string = 'FPL::authToken';
  const authToken = ref<string | null>(null);

  const profileStorageKey: string = 'FPL::profile';
  const profile = ref<IUser | null>(null);

  const alert = ref<IUserAlert>({ dismissed: true } as IUserAlert);

  const sidebarOpen = ref<boolean>(true);
  const profileMenuOpen = ref<boolean>(false);

  // Load stored data from localStorage
  if (authToken.value == null && localStorage.getItem(authStorageKey) != null) {
    authToken.value = localStorage.getItem(authStorageKey) as string;
  }

  if (profile.value == null && localStorage.getItem(profileStorageKey) != null) {
    let storedUserData: string = localStorage.getItem(profileStorageKey) as string;
    profile.value = JSON.parse(storedUserData) as IUser;
  }

  function setAuthToken(token: string | null): void {
    authToken.value = token;

    if (token == null) {
      localStorage.removeItem(authStorageKey);
    } else {
      localStorage.setItem(authStorageKey, authToken.value as string);
    }
  }

  function setProfile(value: IUser | null): void {
    profile.value = value;

    if (profile.value == null) {
      localStorage.removeItem(profileStorageKey);
    } else {
      localStorage.setItem(profileStorageKey, JSON.stringify(profile.value));
    }
  }

  function isAuthenticated(): boolean {
    return authToken.value != null;
  }

  return { authToken, setAuthToken, profile, setProfile, isAuthenticated, alert, sidebarOpen, profileMenuOpen };
})
