import Head from 'next/head';
import styles from '../styles/Track.module.css';
export default function TrackOrder() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Product Detail</title>
      </Head>
      <img src='./map1.png' alt='' className={styles.productImage} />
      <h3>Your order is being Preperd</h3>
      <section className={styles.progress}>
        <img src='./icons/step1.png' />
        <div className={styles.bar} />
        <img src='./icons/step2.png' />
        <div className={styles.bar} />
        <img src='./icons/step3.png' />
        <div className={styles.bar} />
        <img src='./icons/step4.png' />
      </section>
      <button className={styles.button}>View your receipt</button>
    </div>
  );
}
