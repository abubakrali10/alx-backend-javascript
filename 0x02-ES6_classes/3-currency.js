export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string' || typeof name !== 'string') {
      throw TypeError('Type Error');
    }

    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(c) {
    if (typeof c !== 'string') {
      throw TypeError('Code must be a string');
    }
    this._code = c;
  }

  get name() {
    return this._name;
  }

  set name(n) {
    if (typeof n !== 'string') {
      throw TypeError('Length must be a number');
    }
    this._name = n;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
