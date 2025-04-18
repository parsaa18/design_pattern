import singletonCounter from "./counter.js";

export const module01 = () => {
  console.log("called module 1");
  singletonCounter.getCount();
  singletonCounter.increment();
  return singletonCounter.getCount();
};
