import React, { Component } from 'react'
import GlobalStyle from './components/GlobalStyle'

// Import Pages
import AboutUs from './pages/AboutUs.js'


class App extends Component {
  render() {
    
    
    return (
      <div className="App">
        <GlobalStyle/>
          
          <AboutUs />
      </div>
        
      
    )
  }
}

export default App
