import { IRating } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIco from "./star.svg";
import { useState, useEffect, KeyboardEvent, forwardRef, ForwardedRef } from "react";

export const Rating = forwardRef(
  ({ error, isEditable = false, rating, setRating, ...props }: IRating, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
      constructRating(rating);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating]);

    const constructRating = (currentRating: number) => {
      const updatedRating = ratingArr.map((r: JSX.Element, i: number) => {
        return (
          <span
            key={i}
            className={cn(styles.star, {
              [styles.filled]: i < currentRating,
              [styles.editable]: isEditable,
            })}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => handleClick(i + 1)}
          >
            <StarIco tabIndex={isEditable ? 0 : -1} onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)} />
          </span>
        );
      });

      setRatingArr(updatedRating);
    };

    const changeDisplay = (i: number) => {
      if (!isEditable) return;
      constructRating(i);
    };

    const handleClick = (i: number) => {
      if (!isEditable || !setRating) return;
      setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
      if (e.code !== "Space" || !setRating) return;
      setRating(i);
    };

    return (
      <div
        {...props}
        ref={ref}
        className={cn(styles.ratingWrapper, {
          [styles.error]: error,
        })}
      >
        {ratingArr.map((r, i) => (
          <span key={i}>{r}</span>
        ))}
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);

Rating.displayName = "Rating";
