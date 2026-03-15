import styles from "./ProductCarousel.module.css";
import { products } from "../../data/products";
import { useEffect } from "react";

const ProductCarousel = ({ active, setActive }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [setActive]);

  const prev = (active - 1 + products.length) % products.length;

  const next = (active + 1) % products.length;

  return (
    <div className={styles.carousel}>
      <img
        src={products[prev].image}
        className={`${styles.item} ${styles.left}`}
        alt=""
      />

      <img
        src={products[next].image}
        className={`${styles.item} ${styles.right}`}
        alt=""
      />
    </div>
  );
};

export default ProductCarousel;
