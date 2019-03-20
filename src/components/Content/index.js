import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Actions from './Actions';
import Parameters from './Parameters';
import Response from './Response';
import { connect } from 'react-redux';
class Content extends Component {
    componentDidUpdate() {
    }
    render(){
        return(
            <div className="Content">
            <Grid container>
                {this.props.currenAction 
                ?
                    (<>
                        
                        <Actions/>
                        <Parameters/>
                        <Response/>
                        
                    </>)
                    
                :   (<div className="no-action-selected">
                        <span>SELECT ACTION</span>
                    </div>)
                }
            </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        User:state.User,
        currenAction:state.Actions.currentAction
    };
}

export default connect(mapStateToProps)(Content)