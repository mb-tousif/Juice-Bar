import React from "react";
import styles from "../../Style/Home.module.css";

export default function Gallery() {

  return (
    <div className="grid pb-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3">
      <div className={`overflow-hidden mx-auto ${styles.card}`}>
        <div className={styles.cardImage1}></div>
        <div className={styles.cardDescription}>
          <p className={styles.textBody}>
            Tag the freshly made smoothie to your flavor-packed juice. 🤍💚
          </p>
        </div>
      </div>

      <div className={`overflow-hidden mx-auto ${styles.card}`}>
        <div className={styles.cardImage2}></div>
        <div className={styles.cardDescription}>
          <p className={styles.textBody}>
            Approaching a new month means that it's time to RESET!💚​​​​​​​​ Our
            reset packages are a great way to rejuvenate and detoxify your body,
            while still feeling energized throughout the day. <br /> 🥤🥤🥤
          </p>
        </div>
      </div>

      <div className={`overflow-hidden mx-auto ${styles.card}`}>
        <div className={styles.cardImage3}></div>
        <div className={`w-full ${styles.cardDescription}`}>
          <p className={styles.textBody}>
            All smiles here! How are you starting your day off right? ✨​​​​​​​​
          </p>
        </div>
      </div>

      <div className={`overflow-hidden mx-auto ${styles.card}`}>
        <div className={styles.cardImage4}></div>
        <div className={styles.cardDescription}>
          <p className={styles.textBody}>
            Right this way → to our Rewards Program! Sign up today and start
            earning your hearts. 💚 ​​​​​​​​With every $6 you spend at any Juice
            Bar location or online, you'll earn 1 heart. Trade in your hearts
            for special discounts and delicious rewards.Get started today by
            visiting the link in our bio!​​​​​​​​
          </p>
        </div>
      </div>

      <div className={`overflow-hidden mx-auto ${styles.card}`}>
        <div className={styles.cardImage5}></div>
        <div className={styles.cardDescription}>
          <p className={styles.textBody}>
            Show your gut some love by taking one of our wellness shots!
            🧡​​​​​​​​ ​​​​​​​​ Our shots are freshly juiced and can help fight
            inflammation, support your immune system and improve your health!
            🙌🏼​​​​​​​​
          </p>
        </div>
      </div>

      <div className={`overflow-hidden mx-auto ${styles.card}`}>
        <div className={styles.cardImage6}></div>
        <div className={styles.cardDescription}>
          <p className={styles.textBody}>
            The duo you can't live without! 🍉​​​​​​​​ ​​​​​​​​ Whether you are
            a smoothie or tonic guru, we got you covered here at Juice Bar! Try
            our limited time Watermelon Wave or Tonic (or we suggest trying both
            😉!)​​​​​​​​
          </p>
        </div>
      </div>
    </div>
  );
}
