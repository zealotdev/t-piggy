import Image from 'next/image';

import styles from './../styles/SignUp.module.scss';

export default function SignUp() {
  return (
    <div className={styles.formCard}>
      <h2 className={styles.formCardTitle}>Sign Up</h2>
      <form className={styles.form}>
        <div className={styles.inputField}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="pwd">Password</label>
          <input type="password" name="pwd" id="pwd" />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="cpwd">Confirm Password</label>
          <input type="password" name="cpwd" id="cpwd" />
        </div>
        <input type="submit" value="create account" />
      </form>
      <span className={styles.or}>Or</span>
      <button className={styles.googleBtn}>
        <Image src="/google-icon.svg" height={20} width={20} />
        <span className={styles.separator}></span>
        <span>Google</span>
      </button>
    </div>
  );
}
