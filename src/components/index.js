
import React, { Component } from 'react';
import '../styles/index.css';
// Components
import Header from './Layout/Header';
import SideBar from './SideBar/SideBar';
import Content from './Content';
import { connect } from 'react-redux';
class Index extends Component{ 
    componentDidMount() {
        this.checkUser();
    }
    checkUser() {
        if(!localStorage.getItem('userInfo')) {
            this.props.history.push('signIn')
        }
        else {
            this.props.dispatch({
                type:'APPEND_USER_INFO_IN_ACTIONS',
                payload:JSON.parse(localStorage.getItem('userInfo'))
            })
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


const mapStateToProps = (state,dispatch) => {
    return dispatch;
}
export default connect(mapStateToProps)(Index);