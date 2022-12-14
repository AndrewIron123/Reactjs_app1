import React from 'react';


class CalendarPage extends React.Component {
    constructor(props) {  
          super(props);
          this.state = {
            firstname:'',
            lastname:'',
            email:'',
            message:''
          };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]:value
        });
    }

    handleSubmit(event) {
        alert('Data: ' + this.state);
        event.preventDefault();
    }
    render() {
      return  (
        <span className="page calendarpage"> 
            <form className='calendarpage__form' onSubmit={this.handleSubmit}>
            <label>
                First name:
                <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
            </label>
            <label>
                Last name:
                <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
            </label>
            <label>
                E-mail:
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
            </label>
            <label>
                Wiadomość:
                <textarea name="message" value={this.state.message} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form> 
         </span>   
      );
    }
  }
  export default CalendarPage;