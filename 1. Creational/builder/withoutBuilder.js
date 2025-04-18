class User {
  constructor(firstName, lastName, address, role, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.role = role;
    this.id = id;
  }

  describe() {
    console.log(
      `Hello this is ${this.firstName} ${this.lastName}, I live in ${this.address}, my role is ${this.role} and my id is ${this.id}`
    );
  }
}

const user = new User("Parsa", "Aghaee", "Sari", "user", 1);
user.describe();

// What if you don't have the address or the role?
const user2 = new User("Matin", "Poormoradi", "", "", 2);
user2.describe();
