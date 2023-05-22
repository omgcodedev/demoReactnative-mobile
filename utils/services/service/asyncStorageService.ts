import AsyncStorage from "@react-native-async-storage/async-storage";

export const getItemFromAsyncStorage = async (
  key: string
): Promise<JSON | string> => {
  const storageItem: string | null = await AsyncStorage.getItem(key);
  if (storageItem === null) return "";

  return storageItem;
};

export const setItemInAsyncStorage = (
  key: string,
  item: any,
  isStringify: boolean = false
): void => {
  const entry = isStringify ? JSON.stringify(item) : item;
  AsyncStorage.setItem(key, entry);
};

export const removeItemFromAsyncStorage = (key: string): void => {
  AsyncStorage.removeItem(key);
};

export const clearAsyncStorage = (): void => {
  AsyncStorage.clear();
};
