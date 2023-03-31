import { IPTag } from "./PTag.props";
import styles from "./PTag.module.css";
import cn from "classnames";

export const PTag = ({ size, children, className, ...props }: IPTag): JSX.Element => {
  return (
    <p
      className={cn(className, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.l]: size === "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
