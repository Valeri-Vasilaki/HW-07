import axios from "axios";
import { IProduct } from "@Shared/types";
// import { API_HOST } from "./const"; 


const API_HOST = `http://${process.env.REACT_APP_LOCAL_PATH}:${process.env.REACT_APP_LOCAL_PORT}/${process.env.REACT_APP_API_PATH}`;

export async function getProducts(): Promise<IProduct[] | null> {
  try {

    console.log(`send request: ${API_HOST}/products`);
    // console.log("REACT_APP_NOT_SECRET_CODE = " , process.env.REACT_APP_NOT_SECRET_CODE);
    const { data } = await axios.get<IProduct[]>(`${API_HOST}/products`);

    return data;
  } catch (e) {
    // console.log(e);
    return null;
  }
}


export async function getProduct(
  id: string
): Promise<IProduct | null> {
  try {
    const { data } = await axios.get<IProduct>(
      `${API_HOST}/products/${id}`
    );
    return data;
  } catch (e) {
    return null;
  }
}


export async function getSimilarProducts(
  originProductId: string
): Promise<IProduct[] | null> {
  try {
    const { data } = await axios.get<IProduct[]>(
      `${API_HOST}/products/similar/${originProductId}`
    );
    return data;
  } catch (e) {
    return null;
  }
}