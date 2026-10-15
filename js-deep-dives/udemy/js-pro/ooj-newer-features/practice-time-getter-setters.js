class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    if (name.split(" ").length > 2)
      throw new Error("Only use first and last names");
    [this.firstName, this.lastName] = name.split(" ");
    // using some destructring here like I'll be doing in pw
  }
}

const u = new User("Colt", "Steele");
console.log(u.firstName);
console.log(u.lastName);
console.log(u.fullName);
u.fullName = "Ted Lasso";
console.log(u.fullName);
console.log(u);
