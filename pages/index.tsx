import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import Header from '../components/Header';
import Dashboard from '../components/Dashboard';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Dashboard />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
