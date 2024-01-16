import Timer from './components/useEffectTimer'
import './App.scss'
import Counter from './components/useStateCounter'

function App() {


  return (
    <>
      <h1 style={{
        textAlign: 'center',
        color: 'black',
        fontSize: '4rem'
      }}>
        React Hooks
      </h1 >
      <Timer />
      <Counter />
    </>
  )
}

export default App
