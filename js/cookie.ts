import Cookies from "js-cookie";

export function cookieSet(key: string, value: string) {
  try {
    Cookies.set(key, JSON.stringify(value));
  } catch (error) {
    throw new Error(error);
  }
}

export function cookieGet(key: string) {
  const jsonType: string | null | undefined = Cookies.get(key);
  try {
    if (jsonType) {
      return JSON.parse(jsonType);
    }
    return null;
  } catch (error) {
    throw new Error(error);
  }
}
