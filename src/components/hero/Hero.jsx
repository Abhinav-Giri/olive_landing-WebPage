import styles from "./Hero.module.css";
import { useState } from "react";

import ProductCarousel from "../productCarousel/ProductCarousel";
import PhoneMockup from "../phoneMockup/PhoneMockup";
import { products } from "../../data/products";

const Hero = () => {

const [active,setActive] = useState(0);

return (

<section className={styles.hero}>

<h1 className={styles.title}>
The Safest Way to
<br/>
Shop for Groceries
</h1>

<p className={styles.subtitle}>
Use the Olive Food Scanner App to instantly eliminate harmful ingredients
</p>

<button className={styles.downloadBtn}>
<span className={styles.apple}></span>
Download for iOS
</button>

<div className={styles.phoneArea}>

<ProductCarousel
active={active}
setActive={setActive}
/>

<PhoneMockup product={products[active]}/>

</div>

</section>

);

};

export default Hero;