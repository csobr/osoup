import Head from 'next/head';
import styles from '../styles/Order.module.css';

export default function Order() {
  return (
    <div>
      {' '}
      <Head>
        <title>Order</title>
      </Head>
      <div className={styles.center}>
        <h2 style={{ textAlign: 'center', paddingBottom: '1rem' }}>
          Your order
        </h2>
        <li className={styles.orderItems}>
          {' '}
          <img alt='' src='' className={styles.smallImage} />
          <section
            style={{
              flexDirection: 'column',
              paddingLeft: '1rem',
              paddingBottom: '1rem',
            }}>
            <p style={{ margin: 0 }}>Mushroom Soup</p>
            <p style={{ marginTop: '5px', color: '#9d9d9d', fontSize: 12 }}>
              129 SEK
            </p>
          </section>
          <div className={styles.add}>
            <img src='./icons/minus.png' alt='minus' />
            <p>1</p>

            <img src='./icons/plus.png' alt='plus' />
          </div>
        </li>
        <section className={styles.choice}>
          <input type='submit' value='Yourself' className={styles.yourself} />{' '}
          <input type='submit' value='Gift' className={styles.gift} />
        </section>{' '}
        <h3 style={{ marginLeft: '5%' }}>Recipient</h3>
        <section className={styles.userDetails}>
          <label htmlFor='Phone number' className={styles.label}>
            Phone number
            <input
              type='number'
              required
              minLength={10}
              maxLength={13}
              className={styles.input}
            />
          </label>

          <label htmlFor='First name' className={styles.label}>
            {' '}
            First name
            <input
              type='text'
              required
              minLength={2}
              maxLength={15}
              className={styles.input}
            />
          </label>
          <label htmlFor='Last name' className={styles.label}>
            Last name
            <input
              type='text'
              required
              minLength={2}
              maxLength={15}
              className={styles.input}
            />
          </label>
        </section>
      </div>
    </div>
  );
}
