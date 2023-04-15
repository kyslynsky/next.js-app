import { IProduct } from "./Product.props";
import styles from "./Product.module.css";
import cn from "classnames";

export const Product = ({ product, className, ...props }: IProduct): JSX.Element => {
  return (
    <div>
      {product.title}
    </div>
  );
};
