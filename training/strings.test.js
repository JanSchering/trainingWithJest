import { combineStrings, hasSubString, buildAnX } from "./strings";

//Wenn deine Funktion bereit ist, entferne den .skip teil von describe um die Tests zu aktivieren:
describe.skip("combineStrings", () => {
  test("takes 'HELLO', 'WORLD' and returns 'HELLO WORLD'", () => {
    expect(combineStrings("HELLO", "WORLD")).toBe("HELLO WORLD");
  });
});

//Wenn deine Funktion bereit ist, entferne den .skip teil von describe um die Tests zu aktivieren:
describe.skip("hasSubstring", () => {
  test("takes 'Giraffe', 'affe' and returns true", () => {
    expect(hasSubString("Giraffe", "affe")).toBe(true);
  });

  test("takes 'DogeCoin', 'Geld' and returns false", () => {
    expect(hasSubString("DogeCoin", "Geld")).toBe(false);
  });
});

//Wenn deine Funktion bereit ist, entferne den .skip teil von describe um die Tests zu aktivieren:
describe.skip("buildAnX", () => {
  test("takes 1", () => {
    expect(buildAnX(1)).toBe("x");
  });

  test("takes 2", () => {
    expect(buildAnX(2)).toBe("x");
  });

  test("takes 3", () => {
    expect(buildAnX(3)).toBe("x x\n x\nx x");
  });

  test("takes 4", () => {
    expect(buildAnX(4)).toBe("x x\n x\nx x");
  });

  test("takes 5", () => {
    expect(buildAnX(5)).toBe("x   x\n x x\n  x\n x x\nx   x");
  });

  test("takes 6", () => {
    expect(buildAnX(6)).toBe("x   x\n x x\n  x\n x x\nx   x");
  });
});
