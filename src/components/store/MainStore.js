import { observable, action, computed, makeObservable } from "mobx";
export default class MainStore {
  constructor() {
    makeObservable(this);
  }

  @observable currentNavItem = 0;
  @observable userFullName = "James Bond";
  @observable arrayCount = [];
  @observable id = 0;
  @observable mystyle = {
    backgroundColor: "green",
  };
  @action changeUserName(newUserName) {
    this.userFullName = newUserName;
  }

  @action changeCurrentNav = (index) => {
    this.currentNavItem = index;
  };

  @action pushElementArray(id) {
    this.id = id;
    if (this.arrayCount.length <= 9) {
      if (!this.arrayCount.includes(id)) {
        this.arrayCount.push(id);
      }
    } else {
      alert("Вы проверили всех студентов!");
    }

    // this.coursesCount += 1;
  }

  @computed get arrayCountLength() {
    return `${this.arrayCount.length}`;
  }
}
