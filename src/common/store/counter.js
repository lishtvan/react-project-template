import { makeAutoObservable } from 'mobx';

class Counter {
  count = 1;
  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count += 1;
  }
}

export default new Counter();
