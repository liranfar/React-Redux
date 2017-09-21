import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import EventForm from "./EventForm";

class NewEventPage extends Component {
    render(){
        return(
            <div>
                <EventForm />
            </div>
        );
    }
}

NewEventPage.propTypes = {};
NewEventPage.defaultProps = {};

export default NewEventPage;