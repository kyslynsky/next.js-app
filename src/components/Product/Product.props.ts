import { ProductModel } from "@/interfaces";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IProduct extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductModel;
}
