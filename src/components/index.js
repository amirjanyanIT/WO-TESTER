
import React, { Component } from 'react';
import '../styles/index.css';
import CheckUser from '../Actions/Index/CheckUser';
// Components
import Header from './Layout/Header';
import SideBar from './SideBar/SideBar';
import Content from './Content';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'

class Index extends Component{ 
    componentDidMount() {
        CheckUser(this.props.dispatch);
    }

    render() {
        return (
            <div className="main">
                <Header />
                <SideBar />
                <Content />
                {!localStorage.getItem('userInfo') && 
                    <Redirect to={'/signIn'} />
                }
            </div>
        )
    }
}

const mapStateToProps = (dispatch) => {
    return dispatch;
}
export default connect(mapStateToProps)(Index);