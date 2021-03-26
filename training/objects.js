/**
 * @typedef {object} Customer
 * @property {number} savingsBalance - Das Geld auf dem Sparbuch.
 * @property {number} checkingBalance - Das Geld auf dem Girokonto.
 * @property {number} creditBalance - Das Guthaben auf der Kreditkarte.
 */

/**
 * @typedef {object} Item
 * @property {string} name - der Name des items.
 * @property {number} price - Der Preis des items.
 * @property {boolean} hasDiscount - gibt an, ob das item gerade im Angebot ist.
 * @property {number | undefined} discount - der Rabatt auf das item in Prozent.
 */

/**
 * @description Gibt das Gesamtguthaben zurück.
 * @param {Customer} customer - Der Kunde, wessen Guthaben wir wollen.
 * @returns {number} Das Gesamtguthaben.
 */
export function getTotalBalance(customer) {
  //CODE HIER
  return undefined;
}

/**
 * @description Ein Kunde möchte eine gewisse Menge von einem Produkt kaufen.
 * Diese Funktion gibt an, ob er sich diesen Einkauf leisten kann.
 * @param {Customer} customer - Der Kunde der etwas kaufen möchte.
 * @param {Item} item - Das Produkt das er kaufen möchte.
 * @param {number} amount - Die Menge in der der Kunde das Produkt kaufen möchte
 * @returns {boolean} Gibt an, ob der Kunde sich den Einkauf leisten kann.
 */
export function canAfford(customer, item, amount) {
  //CODE HIER
  return undefined;
}

/**
 * @description Es kommt eine Anfrage nach einem bestimmten Produkt.
 * Diese Funktion gibt an, ob das Produkt momentan auf Lager ist.
 * @param {Item} item - Das Produkt, welches angefragt wird.
 * @param {Item[]} inventory - Das Inventar.
 * @returns {boolean} Gibt an, ob das Produkt momentan auf Lager ist.
 */
export function inStock(item, inventory) {
  //CODE HIER
  return undefined;
}
