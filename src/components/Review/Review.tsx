import { IReview } from "./Review.props";
import styles from "./Review.module.css";
import cn from "classnames";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import UserIco from "./user.svg";
import { Rating } from "../Rating/Rating";
import { Divider } from "../Divider/Divider";

export const Review = ({ review, className, ...props }: IReview): JSX.Element => {
  const { name, title, description, createdAt, rating } = review;

  return (
    <div className={cn(styles.review, className)} {...props}>
      <UserIco />
      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>&nbsp;
        <span>{title}</span>
      </div>
      <div className={styles.date}>{format(new Date(createdAt), "dd MMMM yyyy", { locale: enUS })}</div>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <div className={styles.description}>{description}</div>
      <Divider className={styles.description} />
    </div>
  );
};
