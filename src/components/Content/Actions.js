import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { connect } from 'react-redux';

// Actions
import GetMethodResultAction from '../../Actions/Content/Actions/GetMethodResultAction';

class Actions extends Component {
    
    getMethodResultHandler(){ 
        GetMethodResultAction(this.props.dispatch,this.props.currentAction)
    }
    
    render() {
        return (
            <>
                <Grid item lg={12} md={12} sm={12} xs={12} className="block">
                    <div className="url-block">
                        <span className={`url-method method ${this.props.currentAction.method}`}> {this.props.currentAction.method.toUpperCase()} </span>
                        <span className="base-path">http://api.wo.softberg.org?action=</span>
                        <span class="end-point">{this.props.currentAction.endPoint}</span>
                    </div>
                    <Fab className="call-button" onClick={this.getMethodResultHandler.bind(this)}>Call</Fab>
                </Grid>
            </>
        )
    }
}

const mapStateToProps = ({ Actions }) => {
    return { currentAction:Actions.currentAction }
}

export default connect(mapStateToProps)(Actions);