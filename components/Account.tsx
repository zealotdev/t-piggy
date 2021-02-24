import DoneIcon from '@material-ui/icons/Done';

import styles from './../styles/Accounts.module.scss';

export default function Account() {
  return (
    <tr className={styles.trow}>
      <td className={styles.tdata && styles.mark}>
        <span className={styles.marker}></span>
      </td>
      <td className={styles.tdata && styles.accountName}>
        <span className={styles.accountTitle} id="title">
          House Rent
        </span>
        <br />
        <label className={styles.desc} htmlFor="title">
          <span className={styles.labelColor}></span>
          House rent account
        </label>
      </td>
      <td className={styles.tdata}>$100</td>
      <td className={styles.tdata}>$1000</td>
      <td className={styles.tdata}>$10</td>
      <td className={styles.tdata}>0</td>
      <td className={styles.tdata && styles.tSavings}>
        <span>$800</span>
        <form>
          <input type="number" placeholder="30" />
          <button className={styles.submit}>
            <DoneIcon fontSize="large" />
            <span className={styles.tooltiptext}>
              Add today saving to the record
            </span>
          </button>
          {/* <input type="submit" value="save" /> */}
        </form>
      </td>
    </tr>
  );
}
