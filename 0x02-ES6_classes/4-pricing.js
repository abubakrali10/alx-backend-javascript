import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number' || currency instanceof Currency === false) {
      throw TypeError('Type Error');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(a) {
    if (typeof a !== 'number') {
      throw TypeError('amount must be a number');
    }
    this._amount = a;
  }

  get currency() {
    return this._currency;
  }

  set currency(c) {
    if (c instanceof Currency === false) {
      throw TypeError('currency must be a Currency');
    }
    this._currency = c;
  }

  displayFullPrice() {
    return `${this.amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
