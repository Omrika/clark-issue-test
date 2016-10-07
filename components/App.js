import React from 'react'
import Header from './Header'
import TutorList from './Issues/TutorList'

class App extends React.Component {
  render(){
    return <div>
      <Header />
      <TutorList />
    </div>
  }
}

export default App