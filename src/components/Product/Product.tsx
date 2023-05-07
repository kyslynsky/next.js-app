/* eslint-disable react/display-name */
import Image from "next/image";
import cn from "classnames";
import { IProduct } from "./Product.props";
import styles from "./Product.module.css";
import { Card } from "../Card/Card";
import { Tag } from "../Tag/Tag";
import { Rating } from "../Rating/Rating";
import { Button } from "../Button/Button";
import { priceFormatter } from "../../helpers/helpers";
import { Divider } from "../Divider/Divider";
import { pluralize } from "../../helpers";
import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { motion } from "framer-motion";

export const Product = motion(
  forwardRef(({ product, ...props }: IProduct, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);

    const scrollToReview = () => {
      setIsReviewOpened(true);
      reviewRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    return (
      <div {...props} ref={ref}>
        <Card className={styles.product}>
          <div className={styles.logo}>
            <Image className={styles.logo} src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} width={70} height={70} />
          </div>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.price}>
            {priceFormatter(product.price)}
            {product.oldPrice && (
              <Tag className={styles.oldPrice} color="green" size="m">
                {priceFormatter(product.price - product.oldPrice)}
              </Tag>
            )}
          </div>
          <div className={styles.credit}>{priceFormatter(product.credit)}/per month</div>
          <div className={styles.rating}>
            <Rating rating={product.reviewAvg ?? product.initialRating}> </Rating>
          </div>
          <div className={styles.tags}>
            {product.categories.map(c => (
              <Tag className={styles.category} color="transparent" size="m" key={c}>
                {c}
              </Tag>
            ))}
          </div>
          <div className={styles.priceTitle}>Price</div>
          <div className={styles.creditTitle}>Credit</div>
          <div className={styles.rateTitle}>
            <a href="#ref" onClick={scrollToReview}>
              {pluralize(product.reviewCount, "Review")}
            </a>
          </div>
          <Divider className={styles.hr} />

          <div className={styles.description}>{product.description}</div>
          <div className={styles.feature}>
            {product.characteristics.map(c => (
              <div key={c.name} className={styles.characteristics}>
                <span className={styles.characteristicsName}>{c.name}</span>
                <span className={styles.characteristicsDots}></span>
                <span className={styles.characteristicsValue}>{c.value}</span>
              </div>
            ))}
          </div>
          <div className={styles.advBlock}>
            {product.advantages && (
              <div className={styles.advantages}>
                <h4 className={styles.advTitle}>Advantages</h4>
                <div>{product.advantages}</div>
              </div>
            )}
            {product.disadvantages && (
              <div className={styles.disadvantages}>
                <h4 className={styles.advTitle}>Disadvantages</h4>
                <div>{product.disadvantages}</div>
              </div>
            )}
          </div>
          <Divider className={cn(styles.hr, styles.hr2)} />

          <div className={styles.actions}>
            <Button appearence="primary">More informaton</Button>

            <Button
              onClick={() => setIsReviewOpened(!isReviewOpened)}
              className={styles.reviewBtn}
              appearence="ghost"
              arrow={isReviewOpened ? "down" : "rigth"}
            >
              Read reviews
            </Button>
          </div>
        </Card>
        <Card
          ref={reviewRef}
          color="accent"
          className={cn(styles.reviews, {
            [styles.opened]: isReviewOpened,
            [styles.closed]: !isReviewOpened,
          })}
        >
          {product.reviews.map(r => (
            <Review key={r._id} review={r} />
          ))}
          <ReviewForm productId={product._id} />
        </Card>
      </div>
    );
  })
);

Product.displayName = "Motion";
