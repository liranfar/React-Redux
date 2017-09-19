import React,{ Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FlashMessage from './FlashMessage';
import {deleteFlashMessage} from "../../Actions/Creators/flashMessages";

class FlashMessagesList extends Component {
    render(){
        const {deleteFlashMessage} = this.props;
        const messages = this.props.messages.map(message =>
            <FlashMessage key={message.id} message={message} deleteFlashMessage={deleteFlashMessage} />
        );
        return(
            <div>
                {messages}
            </div>
        );
    }
}

FlashMessagesList.propTypes = {
    messages: PropTypes.array.isRequired
};

//we want just the flashMessages from the global state ( combine reducer may describe multiple states so we got complex type )
function mapStateToProps(state) {
    return {
        messages: state.flashMessages
    }
}
//Redux syntax: connect(mapStateToProps,mapDispatchToProps)
export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);