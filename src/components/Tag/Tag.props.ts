import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ITag extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size: "s" | "m";
  color: "transparent" | "red" | "grey" | "green" | "primary";
  href?: string;
  children: ReactNode;
}
