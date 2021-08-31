import ClickCounter from './ClickCounter'
import './styles.css'
import Image from './react.png'
import Logo from './React-icon.svg'
export const App = () => {
  const name = 'Mohit'
  return (
    <>
      <h1>
        Hello React TypeScript Webpack Starter Template - {name}{' '}
        {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={Image} alt="react-logo" width="300" height="200" />
      <img src={Logo} alt="react-icon-svg" width="300" />
      <ClickCounter />
    </>
  )
}
