// enums

enum Role {
  ADMIN,
  USER = 55,
  AUTHOR,
}

const person = {
  name: "Lavish",
  age: 24,
  hobbies: ["Cricket", "Coding"],
  role: Role.ADMIN,
};

console.log(person.role);

let favouriteActivities: string[];

favouriteActivities = ["watch movies"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
