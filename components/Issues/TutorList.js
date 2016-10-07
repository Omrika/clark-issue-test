import React from 'react'
import Student from './Student'
import Button from 'react-bootstrap/lib/Button'

class TutorList extends React.Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
    this.state = {
      active: '',
      showMe: false,
  
      tutors: {
        'tutor1': {students: ['Omrika','student #2','student #3']},
        'tutor2': {students: ['student #4', 'student #5','student #6']}
      }
    }
  }

  onClick(event){
    this.setState({showMe: true });
    this.setState({active: event.target.innerHTML})
  }

  render() {
    var studentArray = this.state.tutors
    var tutorNames = Object.keys(this.state.tutors)
    return <div className="leftModule">
      <div>
        <ul>
          {tutorNames.map(function(name, index){ 
            return <li key={index} className="tutors" onClick={this.onClick}>
              <Button bsSize="large" block>{name}</Button>
            </li> 
          }.bind(this))}
        </ul>
      </div>
    {this.state.showMe ? <Student studentObj={this.state.tutors[this.state.active]}/> : null}
    </div>
  }
}

export default TutorList