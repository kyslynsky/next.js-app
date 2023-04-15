import { IAdvantages } from "./Advantages.props";
import styles from "./Advantages.module.css";
import CheckIco from "./check.svg";

export const Advatages = ({ advantages }: IAdvantages): JSX.Element => {
  return (
    <>
      {advantages.map(a => (
        <div key={a._id} className={styles.advantage}>
          <CheckIco />
          <div className={styles.title}>{a.title}</div>
          {a.description && <hr className={styles.vline} />}
          <div>{a.description}</div>
        </div>
      ))}
    </>
  );
};
