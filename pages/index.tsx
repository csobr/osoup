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
        <img src='/logo.png' className={styles.logo} />
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Fresh from the farm right to your door
          </h1>
          <section className={styles.adressBar}>
            {' '}
            <label htmlFor='adress'>
              <input
                type='text'
                className={styles.input}
                placeholder=' Enter your delivery adress'
              />
            </label>
            <input
              type='submit'
              name='Pick soup'
              className={styles.adressPick}
            />
          </section>
          <div className={styles.heroImage} />
        </div>
        <h2 className={styles.h2}>Popular</h2>
        <div className={styles.popularSlider}>
          <div className={styles.popularImage}>
            <img width='110' height='110' alt='' src='/mushroom.jpg' />
            <p>Mushroom soup</p>
          </div>
        </div>
        <h2>All our soup</h2>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <img alt='' src='/mushroom.jpg' />
            <p style={{ fontSize: 16 }}>Mushroom soup</p>
            <p style={{ fontSize: 14, float: 'right', fontWeight: 'bold' }}>
              129 SEK
            </p>
            <p style={{ fontSize: 12 }}>Swedish</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Online soup delivery</p>
      </footer>
    </div>
  );
}
