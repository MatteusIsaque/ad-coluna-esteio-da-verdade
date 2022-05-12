import styles from './../../styles/index/colaboration.module.scss'

import Image from 'next/image'

import Pagamento from './../../img/index/Camada-18.jpg'

export default function Collaboration() {

  return (
    <article className={styles.main}>
      <div className={styles.content}>
        <h2>
          SEJA UM COLABORADOR
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste consequatur accusamus accusantium quaerat, provident eum optio, ipsam, culpa officia impedit quae minima a obcaecati est maiores. Tempora, repudiandae? Natus, laborum!
        </p>
        <div>
          <Image src={Pagamento} />
        </div>
      </div>
    </article>
  )
}