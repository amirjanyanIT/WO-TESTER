import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Actions from './Actions';
import Parameters from './Parameters';
import Response from './Response';
import { connect } from 'react-redux';
class Content extends Component {
    render() {
        return (
            <div className="Content">
                <Grid container>

                    {this.props.currenAction &&
                        (<>

                            <Actions />
                            <Parameters />
                            <Response />

                        </>)
                    }

                    {!this.props.currenAction &&
                        (<div className="no-action-selected">
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
        currenAction: state.Actions.currentAction
    };
}

export default connect(mapStateToProps)(Content)