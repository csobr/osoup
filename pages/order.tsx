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
            <p style={{ marginTop: 5, color: '#9d9d9d', fontSize: 12 }}>
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
        <section>
          <div className={styles.map}></div>
        </section>
        <section>
          <p className={styles.title}>Adress</p>
          <input type='submit' value='edit' className={styles.edit} />
          <p className={styles.underTitle}>
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
              style={{ height: 15, paddingLeft: 5, marginTop: '4.5%' }}
              src='./icons/clock.png'
              alt='clock icon'
            />
            <p className={styles.underTitle}>Estimated Time of Arrival</p>
            <p
              style={{ right: 12, position: 'absolute' }}
              className={styles.underTitle}>
              15-20 min
            </p>
          </div>
        </section>
        <section style={{ marginTop: '10%' }}>
          <p className={styles.title}>Add greeting</p>
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
              style={{ right: 12, position: 'absolute' }}
              className={styles.underTitle}>
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
        <button>Continue </button>
      </div>
    </div>
  );
}
