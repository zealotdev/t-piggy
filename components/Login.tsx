import Image from 'next/image';
import Link from 'next/link';

import styles from './../styles/form.module.scss';

export default function Login() {
  return (
    <div className={styles.formCard}>
      <h2 className={styles.formCardTitle}>Login</h2>
      <form className={styles.form}>
        <div className={styles.inputField}>
          <label htmlFor="username">Username/Email</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="pwd">Password</label>
          <input type="password" name="pwd" id="pwd" />
        </div>
        <input type="submit" value="login" />
      </form>
      <span className={styles.or}>Or</span>
      <button className={styles.googleBtn}>
        <Image src="/google-icon.svg" height={20} width={20} />
        <span className={styles.separator}></span>
        <span>Google</span>
      </button>
      <span className={styles.link}>
        Don't have an account yet?{' '}
        <span className={styles.linkItem}>
          <Link href="/auth?authType=signup">Create One Here</Link>
        </span>
      </span>
    </div>
  );
}
