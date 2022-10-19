import axios from "axios";
import UserAPI from "./userApi";
import storage from "../storage";
import _ from "lodash";

// Remove the dummy api url
const BASEURL =
  process.env.REACT_APP_BASE_URL || "https://jsonplaceholder.typicode.com";

class API {
  __user = new UserAPI();

  api = axios.create({
    baseURL: BASEURL,
    transformRequest: [(data) => JSON.stringify(data)],
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  get user() {
    return this.__user;
  }

  get(url, ...args) {
    return this.sendRequestInternal(this.api.get, url, ...args);
  }

  post(url, ...args) {
    return this.sendRequestInternal(this.api.post, url, ...args);
  }

  patch(url, ...args) {
    return this.sendRequestInternal(this.api.patch, url, ...args);
  }

  delete(url, ...args) {
    return this.sendRequestInternal(this.api.delete, url, ...args);
  }

  put(url, ...args) {
    return this.sendRequestInternal(this.api.put, url, ...args);
  }

  sendRequestInternal(requestFunc, url, ...args) {
    const token = storage.get("token");
    if (token) {
      this.api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    return requestFunc(url, ...args)
      .then((response) => response.data && response.data)
      .catch((error) => {
        if (error.response) {
          if (_.get(error, ["response", "data", "status"], 500) === 401) {
            storage.clearAll();
            window.location = "/";
          }

          if (_.get(error, ["response", "data", "status"], 500) === 403) {
            storage.clearAll();
            window.location = "/unauthorized";
          }
        }
        throw error;
      });
  }
}

export default new API();
