export const setDataToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, value);
};

export const getDataFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};
