import { makeAutoObservable } from "mobx";
import axios from "axios";

class Store {
  token =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxMjY5NjQwMH0.CBR_mTyRCKMJ871f4IIGLZdNDvcVzXjvvH1WN4aQctaw81feineSyLH093vhUcaljgheNtEW-AaohE-SS87UuA";

  constructor() {
    makeAutoObservable(this);
  }

  async getToken() {
    this.token = await axios({
      method: "post",
      url: "https://hcateringback-dev.unitbeandev.com/api/auth/login",
      data: { login: "admin", password: "admin" },
    }).then((response) => {
      console.log(response.data);
      return response.data;
    });
  }
}

export default new Store();
