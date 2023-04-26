import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ICard extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: "transparent" | "accent";
  children: ReactNode;
}
