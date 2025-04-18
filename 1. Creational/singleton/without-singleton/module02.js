import Counter from "./counter.js";

const counter = new Counter();

export const module02 = () => {
  console.log("called module 2");
  counter.getCount();
  counter.decrement();
  return counter.getCount();
};
