
import React, {Component} from 'react'
import Main from './components/Main'
import Side from './components/Side'
import './App.css';
import './Side.css'




class App extends Component {
render() {
  return(
    <div className="App">
    <Main></Main>
    <Side></Side>
    </div>
  )
}
}
export default App