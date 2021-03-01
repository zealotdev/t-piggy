import Image from 'next/image';

import styles from './../../styles/Auth.module.scss';
import SignUp from './../../components/SignUp';

export default function Auth() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Image src="/logo-3.png" height={65} width={100} />
      </div>
      <div className={styles.authCard}>
        <SignUp />
      </div>
    </div>
  );
}
