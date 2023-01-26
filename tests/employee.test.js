const Employee = require("../lib/employee");
const employee = new Employee("Greg", "303", "gregthegamer@email.com");

test("test if constructor returns correct values", () => {
    expect(employee.name).toBe("Greg");
    expect(employee.id).toBe("303");
    expect(employee.email).toBe("gregthegamer@email.com");
});

test("test if the getName() method returns the employee name", () => {
    expect(employee.getName()).toBe("Greg");
});

test("test if the getId() method returns the employee ID", () => {
    expect(employee.getId()).toBe("303");
});

test("test if the getEmail() method returns the employee email", () => {
    expect(employee.getEmail()).toBe("gregthegamer@email.com");
});