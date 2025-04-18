import singletonCounter from "./counter.js";

export const module02 = () => {
  console.log("called module 2");
  singletonCounter.getCount();
  singletonCounter.decrement();
  return singletonCounter.getCount();
};
