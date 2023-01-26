const Manager = require("../lib/manager");

test("tests if we can create an engineer object", () => {
    let manager = new Manager("Bossman", "1234", "Bossman@email.com", "2");

    expect(manager.name).toBe("Bossman");
    expect(manager.id).toBe("1234");
    expect(manager.email).toBe("Bossman@email.com");
    expect(manager.officeNumber).toBe("2");
})

