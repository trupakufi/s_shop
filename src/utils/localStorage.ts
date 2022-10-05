export const PRODUCT_KEY_NAME = "S_SHOP_PRODUCTS";
export const SHOPS_KEY_NAME = "S_SHOP_SHOPS";
export const CART_KEY_NAME = "S_SHOP_CART";

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
    if (!result) {
      LocalStorageSet(key, JSON.stringify({}));
      LocalStorageGet(key);
    }
    return result;
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
