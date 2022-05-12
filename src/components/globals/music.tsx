import styles from './../../styles/globals/music.module.scss'

import { MdAudiotrack } from 'react-icons/md'

import { useEffect, useState } from 'react'

export default function Music() {
  const [openVolume, setOpenVolume] = useState(false)
  const [volume, setVolume] = useState(0.1)

  const time224 = 253000 // 2m e 53s

  useEffect(() => {
    const music: HTMLAudioElement = new Audio('./sounds/tempoDeSegar.wav')

    console.log(music.currentTime)

    if (music.currentTime === 0) {
      music.play()
      console.log('true')
    } else {
      console.log('false')
    }

    console.log(music.DOCUMENT_TYPE_NODE)


  }, [volume])


  // useEffect(() => {
  //   music.volume = volume
  // }, [volume])

  return (
    <div className={styles.main} onClick={() => { setOpenVolume(!openVolume) }}>
      {
        openVolume && <div className={styles.range}>
          <input type="range" min='0' max='1' step='0.1' onChange={(e) => { setVolume(Number(e.target.value)) }} />
        </div>
      }

      <h2>{volume}</h2>
      <MdAudiotrack size='2rem' color='white' />
    </div >
  )
}