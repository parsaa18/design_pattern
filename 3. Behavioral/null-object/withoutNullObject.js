// Without Using the Null Object Pattern

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.id === 1;
  }
}

const user = [new User(1, "John"), new User(2, "Jane")];

const getUser = (id) => {
  return user.find((user) => user.id === id);
};

const logUser = (id) => {
  const user = getUser(id);

  if (user && user.hasAccess()) {
    console.log(`User ${user.name} has access`);
  } else {
    console.log("User does not have access");
  }

  if (user && user.name) {
    return user.name;
  } else {
    return "Guest";
  }
};

console.log(logUser(1));
console.log(logUser(2));
console.log(logUser(3));
