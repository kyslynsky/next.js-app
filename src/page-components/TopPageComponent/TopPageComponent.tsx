import { HTag, Tag, HhData } from "@/components";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import { TopLevelCategory } from "@/interfaces";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <HTag tag="h1">{page.title}</HTag>
        {products && (
          <Tag size="m" color="grey">
            {products.length}
          </Tag>
        )}
        <span>Sorting</span>
      </div>
      <div>{products && products.map(p => <div key={p._id}>{p.title}</div>)}</div>
      <div className={styles.hhTitle}>
        <HTag tag="h2">Vacancies - {page.category}</HTag>
        <Tag size="s" color="red">
          hh.net
        </Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />}
    </div>
  );
};
