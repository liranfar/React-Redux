import React,{ Component } from 'react';
import map from 'lodash/map';
import timezone from './Data/timezone';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SignupForm extends Component {


    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email:'',
            password:'',
            passwordConfirm:'',
            timezone:'',
            errors: {},
            isLoading: false
            
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
            this.setState({
                errors : {},
                isLoading: true
            });

            e.preventDefault();
            this.props.userSignupRequest(this.state)
                .then(
                (response) => {
                    console.log(response.data);
                    this.setState({
                        errors : response.data.results[0].name,
                        isLoading : false
                    });
                }
                )
                .catch(
                    (error) => {console.log(error.response);}
                );
        }


    render(){

        const options = map(timezone,(val,key) => <option key={val} value={val}> {key}</option>);
        //grab errors from state
        const { errors , username } = this.state;

        return(
            <form onSubmit={this.onSubmit}>
                 <h1>Join us</h1>
                <div className={classnames("form-group", {'has-error': errors.first})}>
                    <label className="control-label">Username</label>
                    <input
                        type="text"
                        name="username"
                        className="form-control" value={this.state.username} onChange={this.onChange} />
                    {/*{errors.username && <span className="help-block">{errors.username}</span>}*/}
                    { errors && <span className="help-block">{errors.first}</span>}
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control" value={this.state.password} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label className="control-label">Re-Password</label>
                    <input
                        type="password"
                        name="passwordConfirm"
                        className="form-control" value={this.state.passwordConfirm} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control" value={this.state.email} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label className="control-label">Timezone</label>
                    <select
                        name="timezone"
                        className="form-control" value={this.state.timezone} onChange={this.onChange}>

                        <option value="" disabled>Choose Your Timezone</option>
                        {options}
                    </select>

                </div>
                <div className="form-group">
                     <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
                         Sign up
                     </button>
                </div>
            </form>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest : PropTypes.func.isRequired
};

export default SignupForm;