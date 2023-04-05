import { TopLevelCategory } from "./page.interface";

export interface PageItem {
  _id: string;
  alias: string;
  title: string;
  category: string;
}

export interface MenuItem {
  _id: {
    secondCategory: string;
  };
  pages: PageItem[];
  isOpened?: boolean;
}

export interface IMenu {
  route: string;
  name: string;
  icon: JSX.Element;
  _id: TopLevelCategory;
}
