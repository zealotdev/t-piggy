import Image from 'next/image';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import styles from './../styles/Header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo-3.png" height={65} width={100} />
      </div>
      <div className={styles.menu}>
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <Image src="/profile.png" height={20} width={20} />
          </div>
          <div className={styles.name}>John Doe</div>
        </div>
        <div className={styles.humbarger}>
          <MenuOpenIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}
