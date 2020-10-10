import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Order.module.css';
import PaymentSuccess from './components/paymentsuccess';

export default function Receipt() {
  const [popup, setPopup] = React.useState(true);

  return (
    <div className={styles.main}>
      {popup && (
        <button
          style={{ all: 'unset' }}
          type='button'
          onClick={() => setPopup(!setPopup)}>
          <PaymentSuccess />{' '}
        </button>
      )}

      <Head>
        <title>Receipt</title>
      </Head>
      <div className={styles.container}>
        <h2 style={{ textAlign: 'center', paddingBottom: '1rem' }}>
          Thanks for your order!
        </h2>
        <p className={styles.title}>Gift</p>
        <li style={{ border: 0 }} className={styles.orderItems}>
          {' '}
          <img alt='soup' src='./mushroom.jpg' className={styles.smallImage} />
          <section
            style={{
              flexDirection: 'column',
              paddingLeft: '1rem',
              paddingBottom: '1rem',
            }}>
            <p style={{ margin: 0 }}>Mushroom Soup</p>
            <p style={{ marginTop: 5, color: '#9d9d9d', fontSize: 12 }}>
              129 SEK
            </p>
          </section>
          <div style={{ width: 30 }} className={styles.add}>
            {' '}
            <p> x 1 </p>
          </div>
        </li>
        <div className={styles.receiptDetails}>
          <section>
            <p style={{ marginBottom: 2 }} className={styles.title}>
              Name
            </p>
            <p style={{ marginTop: 0 }} className={styles.underTitle}>
              Selma Doe
            </p>
          </section>
          <section>
            <p style={{ marginBottom: 2 }} className={styles.title}>
              Adress
            </p>
            <p style={{ marginTop: 0 }} className={styles.underTitle}>
              Västra Finnbodavägen 4, 131 30 Nacka
            </p>
          </section>

          <section>
            <p style={{ marginBottom: 2 }} className={styles.title}>
              Phone number
            </p>
            <p style={{ marginTop: 0 }} className={styles.underTitle}>
              070 123 45 67
            </p>
          </section>
          <section>
            <p style={{ marginBottom: 2 }} className={styles.title}>
              Delivery Date
            </p>

            <p style={{ marginTop: 0 }} className={styles.underTitle}>
              ASAP
            </p>

            <div className={styles.align}>
              {' '}
              <img
                style={{ height: 15, marginLeft: 10, marginTop: '4%' }}
                src='./icons/clock.png'
                alt='clock icon'
              />
              <p style={{ paddingLeft: '.5rem' }} className={styles.underTitle}>
                Estimated Time of Arrival
              </p>
              <p
                style={{ right: 12, position: 'absolute' }}
                className={styles.underTitle}>
                15-20 min
              </p>
            </div>
          </section>
        </div>
        <section>
          <div className={styles.align}>
            <p className={styles.underTitle}>Estimated Subtotal:</p>
            <p
              style={{ right: 12, position: 'absolute' }}
              className={styles.underTitle}>
              386 SEK
            </p>
          </div>
          <div className={styles.align}>
            <p className={styles.underTitle}>Delivery:</p>
            <p
              style={{ right: 12, position: 'absolute' }}
              className={styles.underTitle}>
              39 SEK
            </p>
          </div>
          <div className={styles.align}>
            <p className={styles.underTitle}>VAT(10%):</p>
            <p
              style={{ right: 12, position: 'absolute' }}
              className={styles.underTitle}>
              20 SEK
            </p>
          </div>
          <div className={styles.align}>
            <p style={{ marginBottom: 2 }} className={styles.title}>
              Total:
            </p>
            <p
              style={{ right: 12, position: 'absolute', marginBottom: 0 }}
              className={styles.title}>
              426 SEK
            </p>
          </div>
          <p
            style={{ marginTop: 0, marginBottom: 20 }}
            className={styles.underTitle}>
            (incl. VAT){' '}
          </p>
        </section>{' '}
        <Link href='./trackorder'>
          <button defaultValue='submit' type='submit'>
            Track order progress
          </button>
        </Link>
      </div>
    </div>
  );
}
