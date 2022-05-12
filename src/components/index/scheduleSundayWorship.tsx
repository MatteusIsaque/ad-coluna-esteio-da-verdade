import styles from './../../styles/index/ScheduleSundayWorship.module.scss'

import Image from 'next/image'

import workshipSchedule from './../../img/index/culto-de-doming-assembleia-de-deus.jpg'

import { FaPray } from 'react-icons/fa'
import { BsBook } from 'react-icons/bs'
import { GiMicrophone, GiBookmarklet } from 'react-icons/gi'
import { FaRegMoneyBillAlt, FaPrayingHands } from 'react-icons/fa'





export default function ScheduleSundayWorship() {
  return (
    <article id="component" className={styles.main}>
            <div className={styles.background}>
        <Image src={workshipSchedule} layout='fill' />
      </div>

      <h2>SOBRE O CULTO<br /> DE ADORAÇÃO</h2>

      <p>
        O culto de domingo iniciado com meia hora de oração, podendo variar para mais tempo, a seguir, teremos louvores da harpa cristã e louvores avulsos sendo cantados, em seguida, teremos grupo de irmãs e o grupo de jovens louvando, então o pastor Roberto segue o culto dando algumas oportunidades e ministrando a palavra da noite, antes do termino do culto, é dada a oportunidade a pastora Miriam, para que faça o encerramento do culto.
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