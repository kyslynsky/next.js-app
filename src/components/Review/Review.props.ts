import { ReviewModel } from "@/interfaces";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IReview extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  review: ReviewModel;
}
