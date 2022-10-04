const LocalStorageSet = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

const LocalStorageGet = (key: string) => {
  try {
    const result = localStorage.getItem(key);
    return result || "";
  } catch (error) {
    console.log(error);
  }
};

const LocalStorageRemove = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

export { LocalStorageGet, LocalStorageSet, LocalStorageRemove };
