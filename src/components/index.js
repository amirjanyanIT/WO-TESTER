
import React, { Component } from 'react';
import '../styles/index.css';
// Components
import Header from './Layout/Header';
import SideBar from './SideBar/SideBar';
import Content from './Content';
import { connect } from 'react-redux';


// Actions
import AppendUserInfoAction from '../Actions/Index/AppendUserInfoAction';
class Index extends Component{ 
    componentDidMount() {
        this.checkUser();
    }
    
    checkUser() {
        if(!localStorage.getItem('userInfo')) {
            this.props.history.push('signIn')
        }
        else {
            const userInfoJson = JSON.parse(localStorage.getItem('userInfo'))
            AppendUserInfoAction(this.props.dispatch,userInfoJson)
        }
    }

    render() {
        return (
            <div className="main">
                <Header />
                <SideBar />
                <Content />
            </div>
        )
    }
}


const mapStateToProps = (dispatch) => {
    return dispatch;
}
export default connect(mapStateToProps)(Index);