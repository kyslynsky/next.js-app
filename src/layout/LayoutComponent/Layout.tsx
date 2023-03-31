import { ILayout } from "./Layout.props";
import styles from "./Layout.module.css";
// import cn from "classnames";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Sidebar } from "../Sidebar";
import { FunctionComponent } from "react";
import { AppContextProvider, IAppContext } from "../../../context";

const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.main}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

export const layoutWrapping = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return function wrappedLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
