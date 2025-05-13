import './App.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const apiKey = () => {
    return(`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`)
  }

  return (
    <>
      <Header />
      <Main apiKey={apiKey } />
    </>
  )
}

export default App
