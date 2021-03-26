import { nPrimes, onlyNegatives } from "./arrays";

//Wenn deine Funktion bereit ist, entferne den .skip teil von describe um die Tests zu aktivieren:
describe.skip("nPrimes", () => {
  test("takes 1", () => {
    expect(nPrimes(1)).toStrictEqual([1]);
  });

  test("takes 2", () => {
    expect(nPrimes(2)).toStrictEqual([1, 2]);
  });

  test("takes 3", () => {
    expect(nPrimes(3)).toStrictEqual([1, 2, 3]);
  });

  test("takes 4", () => {
    expect(nPrimes(4)).toStrictEqual([1, 2, 3, 5]);
  });

  test("takes 5", () => {
    expect(nPrimes(5)).toStrictEqual([1, 2, 3, 5, 7]);
  });
});

//Wenn deine Funktion bereit ist, entferne den .skip teil von describe um die Tests zu aktivieren:
describe.skip("onlyNegatives", () => {
  test("takes [1, 2, -1]", () => {
    expect(onlyNegatives([1, 2, -1])).toStrictEqual([-1]);
  });

  test("takes [1, 2, -1, -3, 6, -4]", () => {
    expect(onlyNegatives([1, 2, -1, -3, 6, -4])).toStrictEqual([-1, -3, -4]);
  });
});
