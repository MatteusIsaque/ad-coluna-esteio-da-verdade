import Image from 'next/image'

import styles from './../../styles/index/youthGroup.module.scss'

import YouthGroupImage from './../../img/index/grupo-de-jovens-assembleia-de-deus.jpg'
import Teste from './../../img/index/workshipSchedule.jpg'


export default function YouthGroup() {

  return (
    <article className={styles.main}>
      <h2>JUVENTUDE</h2>
      <div className={styles.content}>

        <div id="youth" className={styles.youth}>
          <Image src={YouthGroupImage} width={843} height={1041} />
        </div>

        <div className={styles.kids}>
          <div>
            <Image src={YouthGroupImage} width={1077} height={521} />
          </div>
          <div className={styles.kidsroom}>
            <Image src={YouthGroupImage} width={1077} height={521} />
          </div>
        </div>

      </div>
    </article>
  )
}