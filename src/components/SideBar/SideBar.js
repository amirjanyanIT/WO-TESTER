import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropdown from './Dropdown';
class SideBar extends Component {
    componentDidMount() {

    }
    currentAction(index) {
        this.props.dispatch({type:'SET_CURRENT_ACTION',payload:index});
        this.props.dispatch({type:'SET_JSON_STATUS',payload:'Passive'})
    }
    render() {
        return (
            <div className="SideBar">
                <div className="sidebar-title">
                    <p>Actions</p>
                </div>
                <div className="action-list">
                    {this.props.actions.map((action,index) => {
                        return (
                            <div onClick={this.currentAction.bind(this,index)} className="action" key={index}>
                                <span className="category">{action.category}</span><span> {action.label}</span>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ Actions }) => {
    return {
        actions:Actions.actions
    }
}

export default connect(mapStateToProps)(SideBar);