import { ITextarea } from "./Textarea.props";
import styles from "./Textarea.module.css";
import cn from "classnames";

export const Textarea = ({ className, ...props }: ITextarea): JSX.Element => {
  return <textarea className={cn(className, styles.textarea)} {...props} />;
};
