import axios from 'axios';
import router from '../router';
import { IUser, ILeague, IProfileData, ILoginData, IUserAlert } from '../interfaces';
import { useUserStore } from '../stores/user';

export class Actions {
  public static getStore() {
    return useUserStore();
  }

  public static login(loginData: ILoginData): void {
    const store = useUserStore();
    const url: string = Actions.backend_url('/auth/login');

    axios.post(url, loginData)
      .then((response) => {
        store.setAuthToken(response.headers['authorization'] as string);
        store.setProfile(response.data as IUser);
        router.push({ name: 'dashboard' });
      })
      .catch((error) => {
        console.log("login failed: " + error);
      });
  }

  public static logout(): void {
    const store = useUserStore();

    store.setAuthToken(null);
    store.setProfile(null);
    router.push({ name: 'home' });
  }

  public static createUser(loginData: ILoginData): void {
    const store = useUserStore();
    const url: string = Actions.backend_url('/api/v1/users');

    axios.post(url, loginData)
      .then((response) => {
        if (!store.isAuthenticated()) {
          Actions.setAlert('success', 'Welcome to the Fantasy Points League!');
          Actions.login(loginData);
        }
      })
      .catch((error) => {
        console.log("createProfile failed: " + error);
      });
  }

  public static saveProfile(profileData: IProfileData): void {
    const store = useUserStore();
    const url: string = Actions.backend_url('/api/v1/users/' + store.profile?.id);

    axios.put(url, profileData, { headers: { 'Authorization': store.authToken} })
      .then((response) => {
        store.setProfile(response.data as IUser);
        Actions.setAlert('success', 'Profile saved successfully.');
        router.push({ name: 'dashboard' });
      })
      .catch((error) => {
        Actions.setAlert('error', 'Profile saved failed.');
        console.log("saveProfile failed: " + error);
      });
  }

  public static viewDashboard(): void {
    router.push({ name: 'dashboard' });
  }

  public static viewProfile(): void {
    router.push({ name: 'profile' });
  }

  public static getLeagues(): ILeague[] {
    // TODO: instead of exposing getLeagues include perhaps we should fetch leagues as part of the viewDashboard action
    return [
      {
        id: 1230,
        name: 'Fantasy Nascar',
        imageUrl: "https://images.unsplash.com/photo-1579987323085-529f1a806810?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        memberCount: 6,
        position: 2
      },
      {
        id: 1231,
        name: 'My Supercross',
        imageUrl: "https://images.unsplash.com/photo-1515540250667-fadb39ba0799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1844&q=80",
        memberCount: 4,
        position: 1
      },
      {
        id: 1232,
        name: 'F1 Madness',
        imageUrl: "https://images.unsplash.com/photo-1615123817063-2649bcb6949a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
        memberCount: 10,
        position: 7
      },
      {
        id: 1233,
        name: 'Rubbing is Racing',
        imageUrl: "https://images.unsplash.com/photo-1591349830016-04a3eb804c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1795&q=80",
        memberCount: 4,
        position: 2
      },
      {
        id: 1234,
        name: '4 wheels turn better',
        imageUrl: "https://images.unsplash.com/photo-1583949678953-6e878338d161?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
        memberCount: 3,
        position: 1
      },
      {
        id: 1235,
        name: 'Indy car',
        imageUrl: "https://images.unsplash.com/photo-1520215838868-1f34e8029665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        memberCount: 4,
        position: 2
      },
    ];
  }

  public static toggleSidebar(): void {
    Actions.getStore().sidebarOpen = !Actions.getStore().sidebarOpen;
  }

  public static toggleProfileMenu(): void {
    Actions.getStore().profileMenuOpen = !Actions.getStore().profileMenuOpen;
  }

  public static setAlert(type: string, message: string): void {
    Actions.getStore().alert = { type: type, message: message, dismissed: false} as IUserAlert
  }

  public static dismissAlert(): void {
    Actions.getStore().alert.dismissed = true;
  }

  private static backend_url(endpoint: string): string {
    return import.meta.env.VITE_BACKEND_URL + endpoint;
  }
}

