// With Using the Null Object Pattern(Much Cleaner)

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.id === 1;
  }
}

class NullUser {
  constructor() {
    this.id = 0;
    this.name = "Guest";
  }

  hasAccess() {
    return false;
  }
}

const user = [new User(1, "John"), new User(2, "Jane")];

const getUser = (id) => {
  return user.find((user) => user.id === id) || new NullUser();
};

const logUser = (id) => {
  const user = getUser(id);

  console.log(
    user.hasAccess()
      ? `User ${user.name} has access`
      : "User does not have access"
  );
  return user.name;
};

console.log(logUser(1));
console.log(logUser(2));
console.log(logUser(3));
