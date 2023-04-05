import { Menu } from "../Menu";
import { ISidebar } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";

export const Sidebar = ({ className, ...props }: ISidebar): JSX.Element => {
  return (
    <div {...props} className={cn(className, styles.sidebar)}>
      <div className={styles.logo}>TOP</div>
      <div>Search</div>
      <Menu />
    </div>
  );
};
