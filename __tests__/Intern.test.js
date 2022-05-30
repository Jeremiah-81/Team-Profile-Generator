const Intern = requires('../lib/Intern');

test("Can set school via constructor", () => {
    const testValue = "MIT";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@test.com", "MIT");
    expect(e.getrole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "MIT";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.getschool()).toBe(testValue);
});