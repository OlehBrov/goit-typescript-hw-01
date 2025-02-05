const add = (num1, num2) => {
    return num1 + num2;
};
console.log(add(1, 5));
const total = 100;
const userName = "Bod";
const isActive = false;
const nums = [1, 2, 3, 0, 55];
const user = {
    name: "Bob",
    age: 18,
};
function printDetails(obj) {
    console.log(`Name: ${obj.name}`);
    if ("privileges" in obj) {
        console.log(`Privileges: ${obj.privileges.join(", ")}`);
    }
    if ("startDate" in obj) {
        console.log(`Start Date: ${obj.startDate}`);
    }
}
printDetails({
    name: "Oleh",
    privileges: ["user", 'admin']
});
var UserRoles;
(function (UserRoles) {
    UserRoles["admin"] = "admin";
    UserRoles["manager"] = "manager";
    UserRoles["employee"] = "manager";
})(UserRoles || (UserRoles = {}));
const userRoleStatuses = {
    [UserRoles.admin]: true,
    [UserRoles.manager]: false,
    //   [UserRoles.employee]: true,
};
export {};
//# sourceMappingURL=index.js.map