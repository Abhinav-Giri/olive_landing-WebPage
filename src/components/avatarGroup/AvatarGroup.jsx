import styles from "./AvatarGroup.module.css";

import u1 from "../../assets/avatars/user1.jpeg";
import u2 from "../../assets/avatars/user2.jpeg";
import u3 from "../../assets/avatars/user3.webp";
import u4 from "../../assets/avatars/user4.webp";

const avatars = [u1, u2, u3, u4];

const AvatarGroup = () => {
  return (
    <div className={styles.wrapper}>

      <div className={styles.avatars}>
        {avatars.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Olive user"
            loading="lazy"
          />
        ))}
      </div>

      <span>Trusted by thousands of healthy families</span>

    </div>
  );
};

export default AvatarGroup;