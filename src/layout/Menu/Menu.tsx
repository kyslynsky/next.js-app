import CoursesIco from "./icons/courses.svg";
import BooksIco from "./icons/books.svg";
import ServicesIco from "./icons/services.svg";
import ProductsIco from "./icons/products.svg";
import styles from "./Menu.module.css";
import cn from "classnames";
import { useContext, KeyboardEvent, useState } from "react";
import { IMenu, PageItem, TopLevelCategory } from "../../../interfaces";
import { AppContext } from "../../../context";
import Link from "next/link";
import { useRouter } from "next/router";

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const [announce, setAnnounce] = useState<"closed" | "opened" | undefined>();

  const router = useRouter();

  const firstLevelMenu: IMenu[] = [
    {
      route: "courses",
      name: "Courses",
      icon: <CoursesIco />,
      _id: TopLevelCategory.Courses,
    },
    {
      route: "services",
      name: "Services",
      icon: <ServicesIco />,
      _id: TopLevelCategory.Services,
    },
    {
      route: "books",
      name: "Books",
      icon: <BooksIco />,
      _id: TopLevelCategory.Books,
    },
    {
      route: "products",
      name: "Products",
      icon: <ProductsIco />,
      _id: TopLevelCategory.Products,
    },
  ];

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map(m => {
          if (m._id.secondCategory == secondCategory) {
            setAnnounce(m.isOpened ? "closed" : "opened");
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
  };

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code == "Space" || key.code == "Enter") {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const buildFirstLevel = () => {
    return (
      <ul className={styles.firstLevelList}>
        {firstLevelMenu.map(m => (
          <li key={m.route}>
            <Link href={`/${m.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: m._id == firstCategory,
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
            </Link>
            {m._id == firstCategory && buildSecondLevel(m)}
          </li>
        ))}
      </ul>
    );
  };

  const buildSecondLevel = (menuItem: IMenu) => {
    return (
      <ul className={styles.secondBlock}>
        {menu.map(m => {
          if (m.pages.map(p => p.alias).includes(router.asPath.split("/")[2])) {
            m.isOpened = true;
          }
          return (
            <li key={m._id.secondCategory}>
              <button
                onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, m._id.secondCategory)}
                className={styles.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
                aria-expanded={m.isOpened}
              >
                {m._id.secondCategory}
              </button>
              <ul className={styles.secondLevelBlock}>{buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}</ul>
            </li>
          );
        })}
      </ul>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
    return pages.map(p => (
      <li key={p._id}>
        <Link
          href={`/${route}/${p.alias}`}
          tabIndex={isOpened ? 0 : -1}
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath,
          })}
          aria-current={`/${route}/${p.alias}` == router.asPath ? "page" : false}
        >
          {p.category}
        </Link>
      </li>
    ));
  };

  return (
    <nav className={styles.menu} role="navigation">
      {announce && (
        <span role="log" className="visualyHidden">
          {announce == "opened" ? "развернуто" : "свернуто"}
        </span>
      )}
      {buildFirstLevel()}
    </nav>
  );
};
