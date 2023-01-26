const Intern = require("../lib/intern");

test("tests if we can create an intern object", () => {
    let intern = new Intern("Billy", "1999", "billythekid@email.com", "UCF");

    expect(intern.name).toBe("Tony");
    expect(intern.id).toBe("1650");
    expect(intern.email).toBe("tonytwotimes@email.com");
    expect(intern.school).toBe("UCF");
})