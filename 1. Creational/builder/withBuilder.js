class User {
  constructor(firstName, lastName, address, role, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address || "nowhere";
    this.role = role || "guest";
    this.id = id;
  }

  describe() {
    console.log(
      `Hello this is ${this.firstName} ${this.lastName}, I live in ${this.address}, my role is ${this.role} and my id is ${this.id}`
    );
  }
}

class UserBuilder {
  constructor(firstName, lastName, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = null; // Optional
    this.role = null; // Optional
    this.id = id;
  }

  setAddress(address) {
    this.address = address;
    return this;
  }

  setRole(role) {
    this.role = role;
    return this;
  }

  build() {
    return new User(
      this.firstName,
      this.lastName,
      this.address,
      this.role,
      this.id
    );
  }
}

const user = new UserBuilder("Parsa", "Aghaee", 1);
user.setAddress("Sari").setRole("user").build().describe();

const user2 = new UserBuilder("Matin", "Poormoradi", 2);
user2.build().describe();
