/**
 * to mock local storage in unit tests
 */

type MockLocalStorage = {
  [key: string]: string;
}

const localStorageMock = (() => {
  let store: MockLocalStorage = {};

  return {
    getItem(key: string) {
      return store[key] || null;
    },
    setItem(key: string, value: string) {
      store[key] = value;
    },
    clear: () => {
      store = {};
    }
  };
})();

export default localStorageMock;
