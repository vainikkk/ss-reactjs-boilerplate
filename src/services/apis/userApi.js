import api from "./api";

export default class UserAPI {
  getUsers() {
    return api.get("/posts");
  }
}
