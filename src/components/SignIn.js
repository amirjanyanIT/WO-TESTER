import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Title from './Title';
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from 'react-redux';
import $ from 'jquery';

const textFieldStyle = {
    width: '100%',
    margin: '0px 0px 20px 0px',
}

const buttonStyle = {
    width: '100%',
    padding: '10px',
}

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
            this.props.dispatch({type:'SET_USER_INFO',payload:userInfo});
            this.props.dispatch({type:'APPEND_USER_INFO_IN_ACTIONS',payload:userInfo});
        }
    }
    
    validate() {
        let log = '';
        if (!this.state.form.login) {
            log = 'Fill Login';
        }
        
        else if (!this.state.form.password) {
            log = 'Fill Password';
        }

        this.setState({ log })
        
        if (log.length)
            return false
            
        return true
    }

    fetchForm({ target }) {
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
            this.props.dispatch({type:'SET_STATUS',payload:'Fetching'});
            $.post('https://api.wo.softberg.org/?action=user_signIn',{
                password:this.state.form.password,
                username:this.state.form.login,
            },response => {
                this.props.dispatch({type:'SET_STATUS',payload:'Passive'});
                if(response.message) {
                    this.setState({log:response.message});
                }
                else {
                    localStorage.setItem('userInfo',JSON.stringify(response.data));
                    this.props.dispatch({type:'SET_USER_INFO',payload:response.data});
                    this.props.dispatch({type:'APPEND_USER_INFO_IN_ACTIONS',payload:response.data});
                    this.props.history.push('/')
                }
            },'json')
        }
    }
    render() {
        return (
            <>
                <div className="SignIn-background">
                    <div className="SignIn">
                        <div className="Header">
                            <Title />
                        </div>
                        <div>
                            <TextField style={textFieldStyle} placeholder="Login" id="login" onChange={this.fetchForm.bind(this)} />
                            <TextField style={textFieldStyle} placeholder="Password" id="password" type="password" onChange={this.fetchForm.bind(this)} />
                            <div style={{ color: 'rgb(255, 255, 255)', minHeight: '25px', textAlign: 'right' }}>{this.state.log}</div>
                        </div>
                        <div className="Footer">
                            <Button variant="contained" style={buttonStyle} onClick={this.signInHandler.bind(this)}>Sign In</Button>
                        </div>
                    </div>
                    {this.props.User.status === 'Fetching' && <LinearProgress /> }
                </div>
            </>
        )
    }
}

const mapStateToProps = ({ User }) => {
    return {
        User
    }
}

export default connect(mapStateToProps)(SignIn);