import { ISort, SortEnum } from "./Sort.props";
import styles from "./Sort.module.css";
import cn from "classnames";
import SortIco from "./sort.svg";

export const Sort = ({ sort, setSort, className, ...props }: ISort): JSX.Element => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <span
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.active]: sort === SortEnum.Rating,
        })}
      >
        <SortIco className={styles.sortIco} />
        By Rating
      </span>
      <span
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [styles.active]: sort === SortEnum.Price,
        })}
      >
        <SortIco className={styles.sortIco} />
        By Price
      </span>
    </div>
  );
};
