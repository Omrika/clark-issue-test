import React from 'react';
import Button from 'react-bootstrap/lib/Button';

class Issue extends React.Component {
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = {
      dropdown: 'studentPayment',
      levels: {
        'studentPayment': 'Account On File',
        'email': 'omrikafolkes@gmail.com',
        'guardian': 'Karen Folkes',
        'tutorAvailability': 'Schedule'
      }
    }
  }

  onChange(event) {
    this.setState({dropdown: event.target.value})
  }

  render(){
    var levelsObj = this.state.levels
    var dropdownState = this.state.dropdown

    return <div className="farrightModule">
      <div className="paymentDetails">
        <select className="clarkDropdown" onChange={this.onChange}>
          <option value="studentPayment">Student Payment Details</option>
          <option value="email">Email Student</option>
          <option value="guardian">Contact Guardian</option>
          <option value="tutorAvailability">Tutor Availability</option>
        </select>
        <span>
        { 
          Object.keys(levelsObj).map(function(item, index){
            if(dropdownState === item) {
              return levelsObj[item]
            }
          })
        }
        </span>
      </div>
      <Button bsSize="small">Resolved</Button>
    </div>
  }
}

export default Issue