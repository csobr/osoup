import React from 'react';
import Head from 'next/head';
import styles from '../styles/Order.module.css';
import PaymentView from './payment';

export default function Order() {
  const [popup, setPopup] = React.useState(false);

  return (
    <div className={styles.main}>
      {popup && <PaymentView />}
      <Head>
        <title>Order</title>
      </Head>
      <h2 style={{ textAlign: 'center', paddingBottom: '1rem' }}>Your order</h2>
      <li className={styles.orderItems}>
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
        <div className={styles.add}>
          <button>
            <img src='./icons/minus.png' alt='minus' />
          </button>
          <p>1</p>
          <button>
            <img src='./icons/plus.png' alt='plus' />
          </button>
        </div>
      </li>
      <section className={styles.choice}>
        <input type='submit' value='Yourself' className={styles.yourself} />{' '}
        <input type='submit' value='Gift' className={styles.gift} />
      </section>{' '}
      <h3 style={{ marginLeft: '4%' }}>Recipient</h3>
      <form className={styles.userDetails}>
        <label htmlFor='Phone number' className={styles.label}>
          Phone number
          <input
            type='tel'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
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
      </form>
      <section>
        <img src='./map.png' alt='placeholder' className={styles.map} />
      </section>
      <section>
        <p style={{ marginBottom: 2 }} className={styles.title}>
          Adress
        </p>
        <input type='submit' value='edit' className={styles.edit} />
        <p style={{ marginTop: 0 }} className={styles.underTitle}>
          Västra Finnbodavägen 4, 131 30 Nacka
        </p>
      </section>
      <section>
        <p style={{ marginBottom: 2 }} className={styles.title}>
          Delivery Date
        </p>
        <input type='submit' value='edit' className={styles.edit} />
        <p style={{ marginTop: 0 }} className={styles.underTitle}>
          ASAP
        </p>

        <div className={styles.align}>
          {' '}
          <img
            style={{ height: 15, marginLeft: 10, marginTop: '4.5%' }}
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
      <section style={{ marginTop: '10%' }}>
        <p style={{ marginBottom: 3 }} className={styles.title}>
          Add greeting
        </p>
        <textarea
          className={styles.textarea}
          autoFocus={true}
          placeholder='Add a greeting to the recipient. '
        />
      </section>
      <section>
        <div
          style={{
            borderTop: 'solid',
            borderColor: '#ddd',
            borderWidth: 1,
            width: '93%',
            margin: 'auto',
          }}
        />
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
      </section>
      <p
        style={{
          color: '#ffffff',
          position: 'absolute',
          right: 0,
          marginRight: '2.5%',
          marginTop: '1.5rem',
        }}>
        426 SEK
      </p>
      <button
        defaultValue='submit'
        type='submit'
        onClick={() => setPopup(!popup)}>
        Continue{' '}
      </button>
    </div>
  );
}
