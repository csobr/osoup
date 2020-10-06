import styles from '../styles/Order.module.css';

export default function PaymentView() {
  return (
    <div className={styles.container}>
      <div className={styles.popup}>
        <section className={styles.content}>
          <h2 style={{ paddingLeft: '1rem', marginTop: 30 }}>Payment</h2>
          <section className={styles.cards}>
            <button>
              <img src='./icons/visa.png' alt='bank card' />
            </button>
            <button>
              <img src='./icons/masterc.png' alt='bank card' />
            </button>
          </section>
          <form className={styles.userDetails}>
            <label htmlFor='Phone number' className={styles.label}>
              Card number
              <input
                style={{ width: 350 }}
                type='number'
                required
                minLength={10}
                maxLength={13}
                className={styles.input}
              />
            </label>
            <section
              style={{ width: 300, justifyContent: 'space-between' }}
              className={styles.align}>
              <label htmlFor='First name' className={styles.label}>
                {' '}
                Expiry Date
                <div
                  style={{
                    flexDirection: 'row',
                    display: 'flex',
                    marginBottom: 0,
                  }}>
                  <input
                    style={{ width: 20, marginRight: '1.3rem' }}
                    type='text'
                    required
                    minLength={2}
                    maxLength={15}
                    className={styles.input}
                  />
                  <input
                    style={{ width: 20 }}
                    type='text'
                    required
                    minLength={2}
                    maxLength={15}
                    className={styles.input}
                  />
                </div>
              </label>
              <label htmlFor='Last name' className={styles.label}>
                CVV
                <input
                  style={{ width: 30 }}
                  type='text'
                  required
                  minLength={2}
                  maxLength={15}
                  className={styles.input}
                />
              </label>
            </section>
            <label htmlFor='Last name' className={styles.label}>
              Card holder name
              <input
                style={{
                  position: 'relative',
                  width: 350,
                  marginBottom: '30%',
                }}
                type='text'
                required
                minLength={2}
                maxLength={15}
                className={styles.input}
              />
            </label>
            <button>Pay</button>
          </form>
        </section>
      </div>
    </div>
  );
}
