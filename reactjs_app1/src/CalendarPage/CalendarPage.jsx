import React from 'react';
import { useSelector, connect } from 'react-redux';
import ModeSwitch from '../features/modeSwitch/ModeSwitch';


class CalendarPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            message: '',
            date: new Date().toLocaleDateString("fr-CA")
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        const JSON_Data = JSON.stringify(this.state);
        alert(JSON_Data);
        event.preventDefault();
    }
    render() {
        const { mode } = this.props;
        return (
            <span className={"page calendarpage" + (mode ? " dark" : "")}>
                <form className='calendarpage__form' onSubmit={this.handleSubmit}>
                    <label>
                        First name:
                        <input className="calendarpage__form_fn_input" type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
                    </label>
                    <label>
                        Last name:
                        <input className="calendarpage__form_ln_input" type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
                    </label>
                    <label>
                        E-mail:
                        <input className="calendarpage__form_em_input" type="email" name="email" placeholder="john@example.com" value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <label>
                        Message:
                        <textarea className="calendarpage__form_me_input" name="message" value={this.state.message} onChange={this.handleChange} />
                    </label>
                    <label>
                        Proposed meeting date:
                        <input className="calendarpage__form_date_input" type="date" name="date" value={this.state.date} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </span>
        );
    }
}

const mapStateToProps = state => ({
    mode: state.modeSwitch.mode
});

export default connect(mapStateToProps, null)(CalendarPage);