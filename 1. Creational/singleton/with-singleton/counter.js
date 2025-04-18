class Counter {
  constructor() {
    if (!Counter.instance) {
      this.count = 0;
      Counter.instance = this;
    }
    return Counter.instance;
  }

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

  getCount() {
    console.log(this.count);
    return this.count;
  }
}

const singletonCounter = new Counter();

export default singletonCounter;
