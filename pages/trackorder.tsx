import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Track.module.css';
export default function TrackOrder() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Product Detail</title>
      </Head>
      <img src='./map1.png' alt='' className={styles.productImage} />
      <section className={styles.container}>
        <h3 style={{ marginBottom: 0 }}>Your order is being Preperd</h3>{' '}
        <div
          style={{
            margin: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 150,
          }}>
          <p>Arrives in</p>
          <p style={{ color: '#20d994' }}>25-30 min</p>
        </div>
        <section className={styles.progress}>
          <img src='./icons/step1.png' />
          <div className={styles.bar} />
          <img src='./icons/step2.png' />
          <div style={{ backgroundColor: '#C4C4C4' }} className={styles.bar} />
          <img src='./icons/step3.png' />
          <div style={{ backgroundColor: '#C4C4C4' }} className={styles.bar} />
          <img src='./icons/step4.png' />
        </section>
      </section>
      <Link href='./receipt'>
        <button className={styles.button}>View your receipt</button>
      </Link>
    </div>
  );
}
