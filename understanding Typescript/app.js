// literal types
function checkUserRole(role) {
    return role === "admin" ? false : true;
}
// the role argument can only have two values,, "admin" and "user",,, other values will give error
console.log(checkUserRole("user"));
