import Counter from "./counter.js";

const counter = new Counter();

export const module01 = () => {
  console.log("called module 1");
  counter.getCount();
  counter.increment();
  return counter.getCount();
};
