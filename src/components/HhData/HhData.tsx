import { IHhData } from "./HhData.props";
import styles from "./HhData.module.css";
import cn from "classnames";
import { Card } from "..";
import RateIco from "./rate.svg";

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: IHhData): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Total{"\u00A0"}Vacancies</div>
        <div className={styles.countValue}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <div>
          <div className={styles.title}>Junior</div>
          <div className={styles.salaryValue}>{juniorSalary}</div>
          <div className={styles.rate}>
            <RateIco className={styles.filled} />
            <RateIco />
            <RateIco />
          </div>
        </div>
        <div>
          <div className={styles.title}>Middle</div>
          <div className={styles.salaryValue}>{middleSalary}</div>
          <div className={styles.rate}>
            <RateIco className={styles.filled} />
            <RateIco className={styles.filled} />
            <RateIco />
          </div>
        </div>
        <div>
          <div className={styles.title}>Senior</div>
          <div className={styles.salaryValue}>{seniorSalary}</div>
          <div className={styles.rate}>
            <RateIco className={styles.filled} />
            <RateIco className={styles.filled} />
            <RateIco className={styles.filled} />
          </div>
        </div>
      </Card>
    </div>
  );
};
