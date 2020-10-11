
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Product.module.css';
import Popup from './components/popup';
export default function ProductDetail() {
  const [toggle, setToggle] = useState(false)
  const handleChange = () => {
    setToggle(!toggle)
  }
  return (
    <div className={styles.main}>
      <Head>
        <title>Product Detail</title>
      </Head>
      {toggle &&
        <Popup />}
      <img src='./mushroom.jpg' alt='' className={styles.productImage} />

      <section className={styles.description}>
        <h3 style={{ marginBottom: '8px' }}>
          Mushroom soup{' '}
          <img
            src='/icons/vegan.png'
            alt='icon'
            style={{ right: '5%', position: 'absolute' }}
          />{' '}
        </h3>
        <p style={{ margin: 0 }}>A rich mushroom soup.</p>
        <p style={{ fontWeight: 600, marginBottom: '10px' }}>Ingredients:</p>
        <p style={{ marginTop: 0 }}>
          Onion, garlic, water, mushroom, oatcream, vegtable brooth, carrots,
          corriander, parsley.
        </p>
      </section>
      <section className={styles.removeIngredient}>
        <p style={{ fontWeight: 'bold' }}>Remove ingredient:</p>
        <li className={styles.removeIngredientList}>
          Corrinader{' '}
          <input
            type="image"
            src='/icons/remove.png'
            alt='x'
            style={{ right: '10%', position: 'absolute' }}
          />
        </li>
        <li className={styles.removeIngredientList}>
          Persley{' '}
          <input
            type='image'
            src='/icons/remove.png'
            alt='x'
            style={{ right: '10%', position: 'absolute' }}
          />
        </li>

        <div className={styles.add}>
          <input type="image" src='./icons/minus.png' alt='minus' />
          <p>1</p>

          <input type="image" src='./icons/plus.png' alt='plus' />
        </div>

        <button className={styles.button} onClick={handleChange}>Add to cart</button>

      </section>
    </div>
  );
}
