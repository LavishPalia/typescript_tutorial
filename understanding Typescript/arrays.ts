const person = {
  name: "Lavish",
  age: 24,
  hobbies: ["Cricket", "Coding"],
};

let favouriteActivities: string[];

favouriteActivities = ["watch movies"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
