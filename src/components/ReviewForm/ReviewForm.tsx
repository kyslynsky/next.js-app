import { IReviewForm } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import CloseIco from "./close.svg";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { API } from "@/helpers/api";
import { useState } from "react";

interface IReviewFormData {
  name: string;
  title: string;
  description: string;
  rating: number;
}

interface IReviewSentResponse {
  message: string;
}

export const ReviewForm = ({ productId, className, ...props }: IReviewForm): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewFormData>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const onSubmitForm = async (formData: IReviewFormData) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, { ...formData, productId });
      console.log(data);

      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError("Something went wrong");
      }
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input {...register("name", { required: { value: true, message: "Name is required" } })} placeholder="Name" error={errors.name} />
        <Input
          {...register("title", { required: { value: true, message: "Title is required" } })}
          placeholder="Title"
          className={styles.title}
          error={errors.title}
        />

        <div className={styles.rating}>
          <span>Rating</span>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: "Rating is required" } }}
            render={({ field }) => <Rating rating={field.value} ref={field.ref} isEditable={true} setRating={field.onChange} error={errors.rating} />}
          />
        </div>

        <Textarea
          {...register("description", { required: { value: true, message: "Description is required" } })}
          placeholder="Review text"
          className={styles.description}
          error={errors.description}
        />

        <div className={styles.submit}>
          <Button appearence="primary">Send</Button>
          <span className={styles.info}>* The review will be moderated before publication</span>
        </div>
      </div>
      {isSuccess && (
        <div className={cn(styles.success, styles.panel)}>
          <div className={styles.successTitle}>Your review has been submitted</div>
          <div>We appreciate your feedback!</div>
          <CloseIco className={styles.close} onClick={() => setIsSuccess(false)} />
        </div>
      )}
      {error && (
        <div className={cn(styles.error, styles.panel)}>
          Oops! Try reload the page!
          <CloseIco className={styles.close} onClick={() => setError(undefined)} />
        </div>
      )}
    </form>
  );
};
