import Head from "next/head";
import styles from "../styles/Track.module.css";
export default function Reviews() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Product Detail</title>
      </Head>
      <img src="./map2.png" alt="" className={styles.productImage} />

      <h3 style={{ paddingLeft: "1rem" }}>Delivered</h3>
      <section className={styles.progress}>
        <img src="./icons/step1.png" />
        <div className={styles.bar} />
        <img src="./icons/step2.png" />
        <div className={styles.bar} />
        <img src="./icons/step3.png" />
        <div className={styles.bar} />
        <img src="./icons/step4.png" />
      </section>
      <section className={styles.review}>
        <p>How was your experience?</p>
        <div className={styles.stars}>
          <input type="image" src="./icons/star.svg" alt="star" />
          <input type="image" src="./icons/star.svg" alt="star" />
          <input type="image" src="./icons/star.svg" alt="star" />
          <input type="image" src="./icons/star.svg" alt="star" />
        </div>
        <p>What could we improve?</p>
        <div className={styles.quickFeedback}>
          <button> Price</button>
          <button>Delivery</button>
          <button>Clarity</button>
          <button>Speed</button>
        </div>
      </section>
    </div>
  );
}
