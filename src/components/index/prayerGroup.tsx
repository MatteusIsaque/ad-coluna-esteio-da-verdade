import Image from 'next/image'
import styles from './../../styles/index/prayerGroup.module.scss'

import prayerGroupImage from './../../img/index/grupo-de-oração.jpg'

export default function PrayerGroup() {

  return (
    <article className={styles.main}>
      <Image src={prayerGroupImage} />
      <div className={styles.content}>
        <h2>Circulo de Oração</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat culpa magni illo corrupti voluptatem? Temporibus eum, praesentium qui itaque ea laboriosam quas. Saepe odio tenetur temporibus veritatis alias quidem aliquam?</p>
        <button>
          SAIBA MAIS
        </button>
      </div>

      <div className={styles.line} />
    </article>
  )
}