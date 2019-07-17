import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

import Title from './Title';

import { connect } from 'react-redux';

// Actions
import SignInAction from '../Actions/SignIn/SignInAction';
import SetUserInfoAction from '../Actions/SignIn/SetUserInfoAction';


class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            form: {},
            log: ''
        }
    }

    componentDidMount() {
        if(localStorage.getItem('userInfo')) {
            let userInfo = JSON.parse(localStorage.getItem('userInfo'));
            SetUserInfoAction(this.props.dispatch,userInfo)
        }
    }
    
    validate() {
        let log = '';
        
        if (!this.state.form.login)
            log = 'Fill Login';
        
        else if (!this.state.form.password)
            log = 'Fill Password';
        
        this.setState({ log })

        if (log.length)
            return false

        return true
    }

    fetchFormHandler({ target }) {
        let form = this.state.form
        form[target.id] = target.value
        this.setState({
            form: {
                ...form,
            }
        })
    }

    signInHandler() {
        if (this.validate()) {
            SignInAction(
                this.props.dispatch,
                this.setState.bind(this),
                this.props.history,
                this.state.form
            );
        }
    }
    render() {
        return (
            <div className="SignIn-background">
                <div className="SignIn">
                    <div className="Header">
                        <Title />
                    </div>
                    <div>
                        <TextField className="signIn-textField" placeholder="Login" id="login" onChange={this.fetchFormHandler.bind(this)} />
                        <TextField className="signIn-textField" placeholder="Password" id="password" type="password" onChange={this.fetchFormHandler.bind(this)} />
                        <div style={{ color: 'rgb(255, 255, 255)', minHeight: '25px', textAlign: 'right' }}>{this.state.log}</div>
                    </div>
                    <div className="Footer">
                        <Button variant="contained" className="sign-in-button" onClick={this.signInHandler.bind(this)}>Sign In</Button>
                    </div>
                </div>
                {this.props.User.status === 'Fetching' && <LinearProgress /> }
            </div>
        )
    }
}

const mapStateToProps = ({ User }) => {
    return { User }
}
export default connect(mapStateToProps)(SignIn);