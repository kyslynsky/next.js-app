import CoursesIco from "./icons/courses.svg";
import BooksIco from "./icons/books.svg";
import ServicesIco from "./icons/services.svg";
import ProductsIco from "./icons/products.svg";
import { IMenu, TopLevelCategory } from "@/interfaces";

export const firstLevelMenu: IMenu[] = [
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

export const priceFormatter = (price: number): string => {
  return price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    .concat(" VET");
};
