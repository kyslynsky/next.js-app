import { IHeader } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";

export const Header = ({ ...props }: IHeader): JSX.Element => {
  return <header {...props}>Header</header>;
};
