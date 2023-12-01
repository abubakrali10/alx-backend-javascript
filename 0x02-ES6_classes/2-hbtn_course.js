export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(n) {
    if (typeof n !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = n;
  }

  get length() {
    return this._length;
  }

  set length(l) {
    if (typeof l !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = l;
  }

  get students() {
    return this._students;
  }

  set students(s) {
    if (!Array.isArray(s)) {
      throw TypeError('Students must be array');
    }
    this._students = s;
  }
}
