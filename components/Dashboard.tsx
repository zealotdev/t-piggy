import styles from './../styles/Dashboard.module.scss';
import Account from './Account';

export default function Dashboard() {
  return (
    <table className={styles.container}>
      <thead className={styles.header}>
        <th className={styles.mark}>
          <span className={styles.marker}></span>
        </th>
        <th className={styles.title}>Accounts</th>
        <th className={styles.title}>Capital</th>
        <th className={styles.title}>Saving Goal</th>
        <th className={styles.title}>Daily Savings</th>
        <th className={styles.title}>Savings Status</th>
        <th className={styles.title}>Total Savings</th>
      </thead>
      <tbody>
        <Account />
      </tbody>
    </table>
  );
}
