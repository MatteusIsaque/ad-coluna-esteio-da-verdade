import styles from './../../styles/index/workshipSchedule.module.scss'

import Image from 'next/image'
import workshipSchedule from './../../img/index/workshipSchedule.jpg'


export default function WorkshipSchedule() {
  return (
    <article id="component" className={styles.main}>
      <div className={styles.background}>
        <Image src={workshipSchedule} layout='fill' />
      </div>

      <h2>CONHEÇA O CRONOGRAMA<br />DOS NOSSOS CULTOS</h2>

      <p>
        Conheça o cronograma da nossa igreja, tendo acesso a informações do que acontecera em cada um dos nossos encontros, todas as nossas reuniões são inteiramentes voltada para o ensino da verdade biblica, com pessoas capacitadas na frente de cada um dos nossos cultos.
      </p>

    </article>
  )
}