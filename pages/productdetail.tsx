import Head from 'next/head';
import styles from '../styles/Product.module.css';
export default function ProductDetail() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Product Detail</title>
      </Head>
      <img src='' alt='' className={styles.productImage} />
      <h3>Mushroom soup</h3>
      <p>A rich mushroom soup.</p>
      <section>
        <p>Ingredients:</p>
        <p>
          Onion, garlic, water, mushroom, oatcream, vegtable brooth, carrots,
          corriander, parsley.
        </p>
      </section>
      <section className={styles.removeIngredient}>
        <p>Remove ingredient:</p>
        <li className={styles.removeIngredientList}>
          Corrinader{' '}
          <img
            src='/icons/remove.png'
            alt='x'
            style={{ right: '10%', position: 'absolute' }}
          />
        </li>
        <li className={styles.removeIngredientList}>
          Persley{' '}
          <img
            src='/icons/remove.png'
            alt='x'
            style={{ right: '10%', position: 'absolute' }}
          />
        </li>
      </section>
      <button className={styles.button}>Add to cart</button>
    </div>
  );
}
