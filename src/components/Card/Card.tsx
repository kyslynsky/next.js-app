import { ICard } from "./Card.props";
import styles from "./Card.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

export const Card = forwardRef(({ color = "transparent", children, className, ...props }: ICard, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.accent]: color === "accent",
      })}
      {...props}
      ref={ref}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";
