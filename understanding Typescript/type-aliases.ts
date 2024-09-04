// Type Aliases / Custom Types

type UserRole = "admin" | "user";

function checkUserRole(role: UserRole) {
  return role === "admin" ? false : true;
}

// the role argument can only have two values,, "admin" and "user",,, other values will give error

console.log(checkUserRole("admin"));

// for objects

// function greet(user: { name: string; age: number }) {
//   console.log('Hi, I am ' + user.name);
// }

// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }

type User = { name: string; age: number };

function greet(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
