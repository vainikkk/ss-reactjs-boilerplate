import api from "./apis/api";

class UserService {
  getUsers() {
    return api.user.getUsers();
  }
}

export default new UserService();
