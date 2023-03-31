import { IFooter } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";

export const Footer = ({ className, ...props }: IFooter): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <p>App created only for studying purpose {format(new Date(), "yyyy")}</p>

      <a href="#" target="_blank">
        Terms of use
      </a>
      <a href="#" target="_blank">
        Privacy Policy
      </a>
    </footer>
  );
};
