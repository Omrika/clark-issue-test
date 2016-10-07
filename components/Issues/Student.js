import React from 'react'
import Issue from './Issue'
import Button from 'react-bootstrap/lib/Button'

class Student extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.state = { 
      showMe: false 
    }
  }

  onClick() {
    this.setState({showMe: true });
  }

  render() {
    return <div className="rightModule">
      <div>
        <ul>
          {this.props.studentObj.students.map(function(name, index){
            return <li className="student" key={index} onClick={this.onClick}>
              <Button bsSize="large" block>{name}</Button>
            </li>
          }.bind(this))}
        </ul>
      </div>
      { this.state.showMe ? <Issue /> : null }
    </div>
  }
}

export default Student