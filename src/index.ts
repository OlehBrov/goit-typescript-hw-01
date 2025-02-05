const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(add(1, 5));

const total: number = 100;
const userName: string = "Bod";
const isActive: boolean = false;

const nums: number[] = [1, 2, 3, 0, 55];

type User = {
  name: string;
  age: number;
  city?: string;
};

const user: User = {
  name: "Bob",
  age: 18,
};
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type AdminOrEmployee = Admin | Employee;

function printDetails(obj: AdminOrEmployee) {
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


enum UserRoles {
  admin = "admin",
  manager = "manager",
  employee = "manager",
}

type UserRolesStatuses = Record<UserRoles, boolean>;

const userRoleStatuses: UserRolesStatuses = {
  [UserRoles.admin]: true,
  [UserRoles.manager]: false,
//   [UserRoles.employee]: true,
};

export {};
