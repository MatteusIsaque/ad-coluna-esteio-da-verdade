import styles from './../../styles/globals/footer.module.scss'

import { BsInstagram } from 'react-icons/bs'
import { FiYoutube } from 'react-icons/fi'
import { AiOutlineYoutube } from 'react-icons/ai'

export default function Contribution() {

  return (
    <footer className={styles.main}>
      <div className={styles.departmentalContent}>
        <h5>departamentos</h5>
        <ul>
          <li>Direção</li>
          <li>Escola Biblia</li>
          <li>Agenda</li>
          <li>Jovens</li>
        </ul>
        <ul>
          <li>Mulheres</li>
          <li>Crianças</li>
          <li>Oração</li>
          <li>Contribuição</li>
        </ul>
      </div>
      <div className={styles.socialMedia}>
        <h5>Redes Sociais</h5>
        <div className={styles.svgContent}>
          <BsInstagram size='1.3rem' color='white' />
          <AiOutlineYoutube size='2rem' color='white'/>
        </div>
      </div>
      <div className={styles.mapContent}>
        <p>
          21 Rua Raphaela Miraglia Scoppetta
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.41213345518148!2d-46.75773532763113!3d-23.654701853159132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6226d193ce014cc0!2sIgreja%20Assembl%C3%A9ia%20Deus!5e0!3m2!1spt-BR!2sbr!4v1650552018038!5m2!1spt-BR!2sbr"></iframe>
      </div>
    </footer>
  )
}