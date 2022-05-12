import Worship from '../components/index/worship'
import AboutTheChurch from '../components/index/aboutTheChurch'


import Contribution from '../components/globals/footer'
import YouthGroup from '../components/index/youthGroup'
import PrayerGroup from '../components/index/prayerGroup'
import Collaboration from '../components/index/collaboration'


export default function Index() {

  return (
    <main>
      <AboutTheChurch />
      <Worship />
      <YouthGroup />

      <PrayerGroup />

      <Collaboration />

      <Contribution />
    </main>
  )
}

