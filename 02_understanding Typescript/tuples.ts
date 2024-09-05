// tuples
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Lavish",
  age: 24,
  hobbies: ["Cricket", "Coding"],
  role: [2, "author"],
};

// typescript allows push operation on tuples, it cannot catch this error
// person.role.push("admin");

console.log(person.role);

let favouriteActivities: string[];

favouriteActivities = ["watch movies"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
