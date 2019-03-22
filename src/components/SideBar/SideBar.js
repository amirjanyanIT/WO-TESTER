import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class SideBar extends Component {
    currentAction(index) {
        this.props.dispatch({ type: 'SET_CURRENT_ACTION', payload: index });
        this.props.dispatch({ type: 'SET_JSON_STATUS', payload: 'Passive' })
    }
    render() {
        return (
            <div className="SideBar">
                <div className="sidebar-title">
                    <p>Actions</p>
                </div>
                <div className="action-list">
                    <List>
                        {this.props.actions.map((action, index) => {
                            return (
                                <>
                                    <ListItem button 
                                    className={(this.props.currentAction && action.label === this.props.currentAction.label ? 'list-item active' : 'list-item')}
                                    onClick={this.currentAction.bind(this, index)}
                                    >
                                        <ListItemText className="item-text">
                                            {(
                                                <>
                                                <span className={`sidebar-method method ${action.method}`}>{action.method.toUpperCase()}</span>
                                                {action.label}
                                                </>
                                            )}
                                        </ListItemText>
                                    </ListItem>
                                </>
                            )
                        })}
                    </List>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ Actions }) => {
    return {
        actions: Actions.actions,
        currentAction: Actions.currentAction
    }
}

export default connect(mapStateToProps)(SideBar);