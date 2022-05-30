const Employee = require('../lib/Employee');
// const Employee = require('../lib/Employee');


// current unit under test using the AAA pattern.
test("New object for Employee", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
});

test("Can set name via constructor arguments", () => {
    const name = "Samus";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor arguments", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.id).toBe(testValue);
});


test("Can set e-mail via constructor arguments", () => {
    const testValue = "testing@testing.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName", () => {
    const testValue = "Samus";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get e-mail via getE-mail()", () => {
    const testValue = "testing@testing.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Samus", 1, "testing@testing.com");
    expect(e.getRole()).toBe(testValue);
});