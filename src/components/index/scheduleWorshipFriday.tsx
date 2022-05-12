import styles from './../../styles/index/scheduleWorshipWednesday.module.scss'

import Image from 'next/image'

import workshipSchedule from './../../img/index/culto-de-sexta-assembleia-de-deus.jpg'

import { FaPray } from 'react-icons/fa'
import { BsBook } from 'react-icons/bs'
import { GiMicrophone, GiBookmarklet } from 'react-icons/gi'
import { FaRegMoneyBillAlt, FaPrayingHands } from 'react-icons/fa'





export default function ScheduleWorshipFriday() {
  return (
    <article id="component" className={styles.main}>
      
      <div className={styles.background}>
        <Image src={workshipSchedule} layout='fill' />
      </div>

      <h2>SOBRE O CULTO<br /> DE ENSINO</h2>

      <p>
        Os cultos de sexta-feira, são de ensino, onde na maior parte teremos um responsável por estar passando algum ensino para a igreja, tratando de assuntos Escatológicos, assuntos especificos da biblia e mais,  esse culto normalmente tem um menor horario para os louvores, e maior para o estudo da palavra, e o seu término é semelhante aos outros dias.
      </p>

      <div className={styles.mainIcons}>

        <div className={styles.contentIcons}>
          <FaPray color="white" size='2rem' />
          <div>
            <h3>18:00 - 18:30</h3>
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