import axios from 'axios';
import router from '../router';
import { IUser, ILeague } from '../interfaces';
import { useUserStore } from '../stores/user';

export class Actions {
  public static getState() {
    return useUserStore();
  }

  public static login(email: string | null, password: string | null): void {
    const store = useUserStore();

    axios.post("http://localhost:3000/auth/login", { email: email, password: password})
      .then((response) => {
        store.updateCurrentUser(response.data as IUser);
        router.push({ name: 'dashboard' });
      })
  }

  public static logout(): void {
    const store = useUserStore();

    store.updateCurrentUser(null);
    router.push({ name: 'home' });
  }

  public static createUser(email: string | null, password: string | null): void {
    const store = useUserStore();

    axios
      .post("http://localhost:3000/api/v1/users", { email: email, password: password})
      .then((response) => {
        if (store.currentUser === undefined) {
          Actions.login(email, password);
        }
      })
  }

  public static viewDashboard(): void {
    router.push({ name: 'dashboard' });
  }

  public static getLeagues(): ILeague[] {
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
    Actions.getState().sidebarOpen = !Actions.getState().sidebarOpen;
  }

  public static toggleProfileMenu(): void {
    Actions.getState().profileMenuOpen = !Actions.getState().profileMenuOpen;
  }
}

