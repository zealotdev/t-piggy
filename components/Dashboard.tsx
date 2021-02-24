
import AddIcon from '@material-ui/icons/Add';
import styles from './../styles/Dashboard.module.scss';
import Account from './Account';

export default function Dashboard() {
  return (
    <div>
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
          <Account />
          <Account />
          <Account />
          <Account />
          <Account />
        </tbody>
      </table>
      <div className={styles.tfooter}>
        <button id="addAccount" className={styles.addAccountBtn}>
          <AddIcon fontSize="large" className={styles.btnIcon} />
          <label htmlFor="addAccount" className={styles.tooltiptext}>
            add account
          </label>
        </button>
        <div className={styles.actions}>
          <span className={styles.pause}>pause</span>
          <span className={styles.terminate}>terminate</span>
        </div>
      </div>
    </div>

  );
}
