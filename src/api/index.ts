import { API_PRODUCTS } from "./endpoints";

export const HookFetch = async () => {
  try {
    const response = await fetch(API_PRODUCTS);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
