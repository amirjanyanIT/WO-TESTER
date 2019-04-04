import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

import SetCurrentAction from '../../Actions/SideBar/SetCurrentAction';
import AddPropsForFilter from '../../Actions/SideBar/AddPropsForFilter';
import SortActionsByCategories from '../../Actions/SideBar/SortActionsByCategories';
class SideBar extends Component {
    constructor() {
        super();
        this.state = {
            actions:null,
            currentAction:null
        }
    }

    currentActionHandler(endPoint){
        SetCurrentAction(this.props.dispatch,endPoint)
    }

    componentDidMount(){
        let actions = AddPropsForFilter(this.props.actions);      
            actions = SortActionsByCategories(actions);  
        this.setState({ actions, currentAction:null });
    }

    filterHandler({ target }) {
        const filterValue = target.value;
        const filteredActions = this.state.actions.map((action) => {
            if(action.label.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1) {
                return {
                    ...action,
                    visibility:true
                }
            }
            else {
                return {
                    ...action,
                    visibility:false
                }
            }
        })
        this.setState({
            actions:filteredActions
        });
    }

    render() {
        return (
            <div className="SideBar">
                <div className="sidebar-title">
                    <p>Actions</p>
                    <TextField onChange={this.filterHandler.bind(this)} className="search-field" placeholder={'Type action name here...'} />
                </div>
                <div className="action-list">
                    <List>
                        {this.state.actions && this.state.actions.map((action, index) => {
                            return (action.visibility &&
                                (
                                    <ListItem button
                                        className={(this.state.currentAction && action.label === this.state.currentAction.label ? 'list-item active' : 'list-item')}
                                        onClick={this.currentActionHandler.bind(this, action.endPoint)}
                                        key={index}>
                                        
                                        <ListItemText className="item-text">
                                            {(
                                                <>
                                                    <span className={`sidebar-method method ${action.method}`}>{action.method.toUpperCase()}</span>
                                                    {action.label}
                                                </>
                                            )}
                                        </ListItemText>
                                    </ListItem>
                                )
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