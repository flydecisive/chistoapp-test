import { makeAutoObservable } from "mobx";

class SidebarState {
  isSidebarOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsSidebarOpen() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}

export default new SidebarState();
