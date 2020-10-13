import styles from "../../styles/Product.module.css";

export default function popup() {
  return (
    <div className={styles.popup}>
      <section>
        Added to cart! <img src="/icons/cart.png" />
      </section>
    </div>
  );
}
