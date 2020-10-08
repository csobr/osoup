import styles from '../../styles/Order.module.css';
export default function PaymentSuccess() {
  return (
    <div className={styles.paymentSuccessPopup}>
      <h3>Payment successsful</h3> <img src='../icons/check.png' alt='icon' />
    </div>
  );
}
