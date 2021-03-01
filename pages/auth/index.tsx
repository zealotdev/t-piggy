import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './../../styles/Auth.module.scss';
import SignUp from './../../components/SignUp';
import Login from './../../components/Login';

export default function Auth() {
  const router = useRouter();
  const { authType } = router.query;
  console.log({ authType });
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Image src="/logo-3.png" height={65} width={100} />
      </div>
      <div className={styles.authCard}>{renderForm(authType)}</div>
    </div>
  );
}

const renderForm = (authType) => {
  if (authType === 'login') {
    return <Login />;
  } else if (authType === 'signup') {
    return <SignUp />;
  } else {
    return <Login />;
  }
};
