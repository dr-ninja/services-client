
export class LocalStorageManager {

  store(key, object) {
    if (typeof key === 'string') {
      try {
        if (typeof object === 'string') {
          localStorage.setItem(key, object);
        } else {
          try {
            let str = JSON.stringify(object);
            if (str) {
              localStorage.setItem(key, str);
            }
          } catch (error) {
            console.warn('json stringify', error, key);
          }
        }
      } catch (e) {
        console.warn('store', e, key);
      }
    }
  }

  getKey(key) {
    if (typeof key === 'string') {
      try {
        let value = localStorage.getItem(key);
        if (value) {
          try {
            return JSON.parse(value);
          } catch (error) {
            return value;
          }
        } else {
          return null;
        }
      } catch (e) {
        console.warn('getKey', e, key);
        return null;
      }
    }
  }

  removeKey(key) {
    if (typeof key === 'string') {
      try {
        localStorage.removeItem(key);
      } catch (e) {
        console.warn('removeKey', e, key);
      }
    }
  }
}
