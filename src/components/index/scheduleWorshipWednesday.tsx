import styles from './../../styles/index/scheduleWorshipWednesday.module.scss'

import Image from 'next/image'

import workshipSchedule from './../../img/index/culto-de-quarta-assembleia-de-deus.jpg'

import { FaPray } from 'react-icons/fa'
import { BsBook } from 'react-icons/bs'
import { GiMicrophone, GiBookmarklet } from 'react-icons/gi'
import { FaRegMoneyBillAlt, FaPrayingHands } from 'react-icons/fa'





export default function ServiceScheduleFriday() {
  return (
    <article id="component" className={styles.main}>
      <div className={styles.background}>
        <Image src={workshipSchedule} layout='fill' />
      </div>

      <h2>SOBRE O CULTO DE<br />QUARTA-FEIRA</h2>

      <p>
        Nossos cultos de quarta-feira é um culto voltado mais para oportunidades de nossos membros contarem os feitos do senhor na vida de cada um, onde começamos com 30 minutos de oração, logo após, serão louvado alguns hinos da Harpa Cristã, após isso, o Presbítero Marco Aurelio segue a adoração com alguns hinos avulsos, após alguns louvores, o culto segue da maneira que for cabivel ao dia, com algumas oportunidades e logo após, a leitura da palavra, tendo seu término as 9h.
      </p>

      <div className={styles.mainIcons}>

        <div className={styles.contentIcons}>
          <FaPray color="white" size='2rem' />
          <div>
            <h3>19:00 - 19:30</h3>
            <p>Momento de Oração</p>
          </div>
        </div>

        <div className={styles.contentIcons}>
          <GiBookmarklet color="white" size='2rem' />
          <div>
            <h3>SERMÃO</h3>
            <p>Leitura e Pregação da Palavra</p>
          </div>
        </div>

        <div className={styles.contentIcons}>
          <BsBook color="white" size='2rem' />
          <div>
            <h3>HINÁRIO</h3>
            <p>Hinos da Harpa Cristã</p>
          </div>
        </div>

        <div className={styles.contentIcons}>
          <FaRegMoneyBillAlt color="white" size='2rem' />
          <div>
            <h3>OFERTAS</h3>
            <p>Entrega de Ofertas e Dizimos</p>
          </div>
        </div>

        <div className={styles.contentIcons}>
          <GiMicrophone color="white" size='2rem' />
          <div>
            <h3>LOUVORES</h3>
            <p>Louvores Avulso</p>
          </div>
        </div>

        <div className={styles.contentIcons}>
          <FaPrayingHands color="white" size='2rem' />
          <div>
            <h3>ORAÇÃO FINAL</h3>
            <p>Oração e Benção Apostólica</p>
          </div>
        </div>

      </div>

    </article>
  )
}