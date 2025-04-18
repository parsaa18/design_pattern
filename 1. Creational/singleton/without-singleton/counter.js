class Counter {
  constructor() {
    this.count = 0;
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

export default Counter;
