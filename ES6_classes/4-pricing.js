import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // ===== getters =====
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // ===== setters =====
  set amount(value) {
    this._amount = value;
  }

  set currency(value) {
    this._currency = value;
  }

  // ===== methods =====
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
