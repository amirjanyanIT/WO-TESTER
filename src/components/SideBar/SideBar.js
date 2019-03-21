import React, { Component } from 'react';
import { connect } from 'react-redux';
class SideBar extends Component {
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
                            <div 
                            onClick={this.currentAction.bind(this,index)} 
                            className={(this.props.currentAction && action.label === this.props.currentAction.label ? 'action active' : 'action')} 
                            key={index}>
                                <span className="method">{action.method.toUpperCase()}</span><span> {action.label}</span>
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
        actions:Actions.actions,
        currentAction:Actions.currentAction
    }
}

export default connect(mapStateToProps)(SideBar);