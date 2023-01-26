const Engineer = require("../lib/engineer");

test("tests if we can create an engineer object", () => {
    let engineer = new Engineer("Tony", "1650", "tonytwotimes@email.com", "tonytwotimes");

    expect(engineer.name).toBe("Tony");
    expect(engineer.id).toBe("1650");
    expect(engineer.email).toBe("tonytwotimes@email.com");
    expect(engineer.github).toBe("tonytwotimes")
})