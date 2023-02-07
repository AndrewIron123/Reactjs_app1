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
            date: new Date().toLocaleDateString("fr-CA"),
            loading: false
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
        this.setState({
            loading: true
        });

        fetch(process.env.REACT_APP_API_URL_MEETINGS, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                message: this.state.message,
                date: this.state.date
            }),
        })
            .then(async resp => {
                this.setState({
                    loading: false
                });
                if (resp.ok && resp.status === 201) {
                    alert("Message sent successfully");
                } else {
                    alert("Something went wrong");
                }
            })
            .catch(err => {
                this.setState({
                    loading: false
                });
                alert("Something went wrong");
            });

        event.preventDefault();
    }

    render() {
        const { mode } = this.props;
        const { loading } = this.state;
        return (
            <span className={"page calendarpage" + (mode ? " dark" : "")}>
                <form className='calendarpage__form' onSubmit={this.handleSubmit}>
                    <label>
                        First name:
                        <input className="calendarpage__form_fn_input" type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Last name:
                        <input className="calendarpage__form_ln_input" type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} required />
                    </label>
                    <label>
                        E-mail:
                        <input className="calendarpage__form_em_input" type="email" name="email" placeholder="john@example.com" value={this.state.email} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Message:
                        <textarea className="calendarpage__form_me_input" name="message" value={this.state.message} onChange={this.handleChange} required />
                    </label>
                    <label>
                        Proposed meeting date:
                        <input className="calendarpage__form_date_input" type="date" name="date" value={this.state.date} onChange={this.handleChange} required />
                    </label>
                    <button type="submit" className="calendarpage__form_submit_button" disabled={loading ? true : false}>{loading ? "Loading..." : "Send"}</button>
                </form>
            </span>
        );
    }
}

const mapStateToProps = state => ({
    mode: state.modeSwitch.mode
});

export default connect(mapStateToProps, null)(CalendarPage);