import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Osoup</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Fresh from the farm right to your door</h1>
        <section>
          {' '}
          <label htmlFor='adress'>
            <input
              type='text'
              className={styles.input}
              placeholder=' Enter your delivery adress'
            />
          </label>
          <input type='submit' name='Pick soup' className={styles.adressPick} />
        </section>

        <div className={styles.grid}></div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
