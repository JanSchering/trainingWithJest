import { getTotalBalance, canAfford, inStock } from "./objects";

//Wenn deine Funktion bereit ist, entferne den .skip teil von describe um die Tests zu aktivieren:
describe.skip("getTotalBalance", () => {
  test("all positive", () => {
    const customer = {
      savingsBalance: 300,
      checkingBalance: 100,
      creditBalance: 50,
    };

    expect(getTotalBalance(customer)).toBe(450);
  });

  test("some negative, positive total", () => {
    const customer = {
      savingsBalance: 300,
      checkingBalance: -100,
      creditBalance: -50,
    };

    expect(getTotalBalance(customer)).toBe(150);
  });

  test("negative total balance", () => {
    const customer = {
      savingsBalance: -300,
      checkingBalance: -100,
      creditBalance: -50,
    };

    expect(getTotalBalance(customer)).toBe(-450);
  });
});

//Wenn deine Funktion bereit ist, entferne den .skip teil von describe um die Tests zu aktivieren:
describe.skip("canAfford", () => {
  test("negative Balance, cant afford", () => {
    const customer = {
      savingsBalance: -300,
      checkingBalance: -100,
      creditBalance: -50,
    };

    const item = {
      name: "something",
      price: 20,
      hasDiscount: false,
      discount: undefined,
    };

    expect(canAfford(customer, item, 1)).toBe(false);
  });

  test("enough Balance, can afford", () => {
    const customer = {
      savingsBalance: 300,
      checkingBalance: 100,
      creditBalance: 50,
    };

    const item = {
      name: "something",
      price: 20,
      hasDiscount: false,
      discount: undefined,
    };

    expect(canAfford(customer, item, 1)).toBe(true);
  });

  test("could afford one, but not two", () => {
    const customer = {
      savingsBalance: 300,
      checkingBalance: 100,
      creditBalance: 50,
    };

    const item = {
      name: "something",
      price: 440,
      hasDiscount: false,
      discount: undefined,
    };

    expect(canAfford(customer, item, 2)).toBe(false);
  });

  test("can afford two", () => {
    const customer = {
      savingsBalance: 300,
      checkingBalance: 100,
      creditBalance: 50,
    };

    const item = {
      name: "something",
      price: 140,
      hasDiscount: false,
      discount: undefined,
    };

    expect(canAfford(customer, item, 2)).toBe(true);
  });

  test("can afford two, but not three", () => {
    const customer = {
      savingsBalance: 300,
      checkingBalance: 100,
      creditBalance: 50,
    };

    const item = {
      name: "something",
      price: 220,
      hasDiscount: false,
      discount: undefined,
    };

    expect(canAfford(customer, item, 3)).toBe(false);
  });

  test("can afford three", () => {
    const customer = {
      savingsBalance: 300,
      checkingBalance: 100,
      creditBalance: 50,
    };

    const item = {
      name: "something",
      price: 20,
      hasDiscount: false,
      discount: undefined,
    };

    expect(canAfford(customer, item, 3)).toBe(true);
  });
});

//Wenn deine Funktion bereit ist, entferne den .skip teil von describe um die Tests zu aktivieren:
describe.skip("inStock", () => {
  const item1 = {
    name: "A",
    price: 10,
    hasDiscount: false,
  };

  test("not in stock", () => {
    const inventory = [];

    expect(inStock(item1, inventory)).toBe(false);
  });

  test("in stock", () => {
    const inventory = [item1];

    expect(inStock(item1, inventory)).toBe(true);
  });
});
