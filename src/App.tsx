import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import { GlobalCss } from './styles'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalCss />
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App
