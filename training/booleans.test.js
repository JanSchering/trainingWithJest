import { TestScheduler } from "@jest/core";
import {
  and,
  or,
  andWithThree,
  greaterThan,
  smallerThan,
  smallerThanOrEqualTo,
  stringEquality,
} from "./booleans";

//Wenn deine Funktion bereit ist, entferne den .skip teil von describe um die Tests zu aktivieren:
describe.skip("and", () => {
  test("takes true and true and returns true", () => {
    expect(and(true, true)).toBe(true);
  });

  test("takes true and false and returns false", () => {
    expect(and(true, false)).toBe(false);
  });

  test("takes false and true and returns false", () => {
    expect(and(false, true)).toBe(false);
  });

  test("takes false and false and returns false", () => {
    expect(and(false, false)).toBe(false);
  });
});

//Wenn deine Funktion bereit ist, entferne den .skip teil von describe um die Tests zu aktivieren:
describe.skip("or", () => {
  test("takes true and true and returns true", () => {
    expect(or(true, true)).toBe(true);
  });

  test("takes true and false and returns true", () => {
    expect(or(true, false)).toBe(true);
  });

  test("takes false and true and returns true", () => {
    expect(or(false, true)).toBe(true);
  });

  test("takes false and false and returns false", () => {
    expect(or(false, false)).toBe(false);
  });
});

//Wenn deine Funktion bereit ist, entferne den .skip teil von describe um die Tests zu aktivieren:
describe.skip("andWithThree", () => {
  test("takes true, true, true and returns true", () => {
    expect(andWithThree(true, true, true)).toBe(true);
  });

  test("takes true, true, false and returns false", () => {
    expect(andWithThree(true, true, false)).toBe(false);
  });
});

//Wenn deine Funktion bereit ist, entferne den .skip teil von describe um die Tests zu aktivieren:
describe.skip("greaterThan", () => {
  test("takes 1,2 and returns false", () => {
    expect(greaterThan(1, 2)).toBe(false);
  });

  test("takes 2,2 and returns false", () => {
    expect(greaterThan(2, 2)).toBe(false);
  });

  test("takes 3,2 and returns true", () => {
    expect(greaterThan(2, 2)).toBe(true);
  });
});

//Wenn deine Funktion bereit ist, entferne den .skip teil von describe um die Tests zu aktivieren:
describe.skip("smallerThan", () => {
  test("takes 1,2 and returns true", () => {
    expect(smallerThan(1, 2)).toBe(true);
  });

  test("takes 2,2 and returns false", () => {
    expect(smallerThan(2, 2)).toBe(false);
  });

  test("takes 3,2 and returns false", () => {
    expect(smallerThan(2, 2)).toBe(false);
  });
});

//Wenn deine Funktion bereit ist, entferne den .skip teil von describe um die Tests zu aktivieren:
describe.skip("smallerThanOrEqualTo", () => {
  test("takes 1,2 and returns true", () => {
    expect(smallerThanOrEqualTo(1, 2)).toBe(true);
  });

  test("takes 2,2 and returns true", () => {
    expect(smallerThanOrEqualTo(2, 2)).toBe(true);
  });

  test("takes 3,2 and returns false", () => {
    expect(smallerThanOrEqualTo(2, 2)).toBe(false);
  });
});

//Wenn deine Funktion bereit ist, entferne den .skip teil von describe um die Tests zu aktivieren:
describe.skip("stringEquality", () => {
  test("takes TEXT, TEXT and returns true", () => {
    expect(stringEquality("TEXT", "TEXT")).toBe(true);
  });

  test("takes A, B and returns false", () => {
    expect(stringEquality("A", "B")).toBe(false);
  });
});
