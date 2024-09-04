var person = {
    name: "Lavish",
    age: 24,
    hobbies: ["Cricket", "Coding"],
};
var favouriteActivities;
favouriteActivities = ["watch movies"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
