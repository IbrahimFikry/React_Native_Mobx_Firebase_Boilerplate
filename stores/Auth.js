import { observable, action, computed, toJS } from "mobx";

export default class Auth {
  @observable check = false;

  @action setCheck(check) {
    this.check = check;
  }

}
