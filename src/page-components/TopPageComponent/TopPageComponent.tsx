import { HTag, Tag, HhData, Advatages, Sort, Product } from "@/components";
import { SortEnum } from "@/components/Sort/Sort.props";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import { TopLevelCategory } from "@/interfaces";
import { useEffect, useReducer } from "react";
import { sortReducer } from "./sort.reducer";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

  const handleSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    dispatchSort({ type: "reset", initialState: products });
  }, [products]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <HTag tag="h1">{page.title}</HTag>
        {products && (
          <Tag size="m" color="grey">
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={handleSort} />
      </div>
      <div>{sortedProducts && sortedProducts.map(p => <Product product={p} key={p._id} />)} </div>
      <div className={styles.hhTitle}>
        <HTag tag="h2">Vacancies - {page.category}</HTag>
        <Tag size="s" color="red">
          hh.net
        </Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
      {page.advantages && page.advantages.length > 1 && (
        <>
          <HTag tag="h2">Advantages</HTag>
          <Advatages advantages={page.advantages} />
        </>
      )}
      <HTag tag="h2">Tags</HTag>
      {page.tags.map(t => (
        <Tag color="primary" size="s" key={t}>
          {t}
        </Tag>
      ))}
    </div>
  );
};
