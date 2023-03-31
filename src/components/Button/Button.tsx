import { IButton } from "./Button.props";
import styles from "./Button.module.css";
import ArrowIco from "./arrow.svg";
import cn from "classnames";

export const Button = ({ appearence, arrow = "none", children, className, ...props }: IButton): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearence === "primary",
        [styles.ghost]: appearence === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
            [styles.right]: arrow === "rigth",
          })}
        >
          <ArrowIco />
        </span>
      )}
    </button>
  );
};
