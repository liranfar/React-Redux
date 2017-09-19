import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import classsnames from 'classnames';
class FlashMessage extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.deleteFlashMessage(this.props.message.id);
    }
    render(){

        const {id, type, text } = this.props.message;
        return(
            <div className={classsnames('alert', {
                'alert-success' : type === 'success',
                'alert-danger' : type === 'error'
            })}>
                <button onClick={this.onClick} className="button close">
                    <span>
                        &times; {/*the x symbol*/}
                    </span>
                </button>
                {text}
            </div>
        );
    }
}

//API define
FlashMessage.propTypes = {
    message: PropTypes.object.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
}

export default FlashMessage;