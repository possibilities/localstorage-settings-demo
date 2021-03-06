import Nav from '../components/Nav'
import Foot from '../components/Foot'
import useLocalStorage from '../modules/useLocalStorage'

export default function () {
  const [settings, patchSettings] = useLocalStorage({ isItFunky: false })
  return (
    <>
      <Nav />
      <h1>home</h1>
      <p>is it funky?</p>
      <p>{settings.isItFunky ? 'yes' : 'no'}</p>
      <button onClick={() => patchSettings({ isItFunky: !settings.isItFunky })}>
        turn {settings.isItFunky ? 'off' : 'on'} funky-ness
      </button>
      <Foot />
    </>
  )
}
