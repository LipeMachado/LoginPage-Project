import { GlobalStyle } from './Style/GlobalStyle'
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './router.jsx'

function App() {

  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Routes />
      </Router>
    </div>
  )
}

export default App