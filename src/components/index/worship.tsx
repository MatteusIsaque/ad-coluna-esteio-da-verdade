
import type { NextPage } from 'next'
// import styles from '../../styles/index/worship.module.scss'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'
import WorkshipSchedule from './workshipSchedule'
import WorkshipScheduleWednesday from './scheduleWorshipWednesday'
import ServiceScheduleFriday from './scheduleWorshipFriday'
import ScheduleSundayWorship from './scheduleSundayWorship'

export default function Worship() {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const components = document.querySelectorAll('#component')
    const container: HTMLElement = document.querySelector('#container')!

    console.log(components)

    gsap.to(components, {
      xPercent: -100 * (components.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (components.length - 1),
        end: () => "+=" + container.offsetWidth
      }
    })
  }, [])


  return (
    <article id="container">

      <WorkshipSchedule />
      <WorkshipScheduleWednesday />
      <ServiceScheduleFriday />
      <ScheduleSundayWorship />

    </article>
  )
}
