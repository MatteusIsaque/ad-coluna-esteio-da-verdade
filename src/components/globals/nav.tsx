import styles from './../../styles/globals/nav.module.scss'

import Image from "next/image";

import Logo from './../../img/global/logo.jpg'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [input, setInput] = useState(false)

  useEffect(() => {
    const inputElement: HTMLInputElement = document.querySelector('#input')!

    if (input === true) {
      inputElement.checked = true
    } else {
      inputElement.checked = false
    }
  })

  return (
    <header className={styles.main}>

      <input type="checkbox" id="input" className={styles.inputMenu} />

      <div className={styles.hamburger} onClick={() => { setInput(!input) }}>
        <div />
        <div />
        <div />
      </div>

      <nav className={styles.nav}>

        <ul>
          <li>
            <a href="">
              INICIO
            </a>
          </li>
          <li>
            <a href="">
              CRONOGRAMA
            </a>
          </li>
          <li>
            <a href="">
              CIRCULO DE ORAÇÃO
            </a>
          </li>


          <div className={styles.logo}>
            <Image src={Logo} width={120} height={103} />
          </div>

          <li>
            <a href="">
              JOVENS
            </a>
          </li>
          <li>
            <a href="">
              CRIANÇAS
            </a>
          </li>
          <li>
            <a href="">
              EBD
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}