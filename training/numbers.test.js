import { sum, sumThree, multiply, factorial } from "./numbers.js";

//Wenn deine Funktion bereit ist, entferne den .skip teil von describe um die Tests zu aktivieren:
describe.skip("sum", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("adds 3 + 5 to equal 8", () => {
    expect(sum(3, 5)).toBe(8);
  });

  test("adds 1000 + 2000 to equal 3000", () => {
    expect(sum(1000, 2000)).toBe(3000);
  });
});

//Wenn deine Funktion bereit ist, entferne den .skip teil von describe um die Tests zu aktivieren:
describe.skip("sumThree", () => {
  test("does 1 + 2 + 3 = 6", () => {
    expect(sumThree(1, 2, 3)).toBe(6);
  });

  test("does 150 + 270 + 300 = 720", () => {
    expect(sumThree(150, 270, 300)).toBe(720);
  });
});

//Wenn deine Funktion bereit ist, entferne den .skip teil von describe um die Tests zu aktivieren:
describe.skip("multiply", () => {
  test("does 2.5 * 100 = 250", () => {
    expect(multiply(2.5, 100)).toBe(250);
  });

  test("does 1 * 1 = 1", () => {
    expect(multiply(1, 1)).toBe(1);
  });

  test("does 0 * 1 = 0", () => {
    expect(multiply(0, 1)).toBe(0);
  });

  test("does 5 * 5 = 25", () => {
    expect(multiply(2.5, 100)).toBe(250);
  });
});

describe.skip("factorial", () => {
  test("does 5! = 120", () => {
    expect(factorial(5)).toBe(120);
  });

  test("does 1! = 1", () => {
    expect(factorial(1)).toBe(1);
  });

  test("does 0! = 1", () => {
    expect(factorial(0)).toBe(1);
  });
});
