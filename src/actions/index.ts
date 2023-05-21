import axios from 'axios';
import router from '../router';
import { IUser } from '../interfaces';
import { useUserStore } from '../stores/user';

export class Actions {
  public static login(email: string | null, password: string | null): void {
    const store = useUserStore();

    axios.post("http://localhost:3000/auth/login", { email: email, password: password})
      .then((response) => {
        store.updateCurrentUser(response.data as IUser);
        router.push({ name: 'user' });
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
}

