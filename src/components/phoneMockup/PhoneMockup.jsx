import styles from "./PhoneMockup.module.css";

const PhoneMockup = ({ product }) => {
  return (
    <div className={styles.phone}>

      {/* iPhone notch */}
      <div className={styles.notch}></div>

      {/* phone screen */}
      <div className={styles.screen}>
        <div className={styles.card}>

          <img
            src={product.image}
            alt={product.name}
            className={styles.productImage}
          />

          <h3>{product.name}</h3>

          <p className={styles.brand}>{product.brand}</p>

          <div className={styles.score}>
            {product.score} • {product.status}
          </div>

          <p className={styles.description}>
            {product.description}
          </p>

          <div className={styles.stats}>
            <div>pH: <b>{product.ph}</b></div>
            <div>Nitrate: <b>{product.nitrate}</b></div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default PhoneMockup;