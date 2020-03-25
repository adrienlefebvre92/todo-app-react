export default class StorageService {
  constructor(storageKey) {
    this.key = storageKey;
  }

  set(value) {
    return localStorage.setItem(this.key, JSON.stringify(value));
  }

  get() {
    return JSON.parse(localStorage.getItem(this.key));
  }
}
