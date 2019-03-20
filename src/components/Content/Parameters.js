import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
class Parameters extends Component {
    render() {
        return (
            <Grid item lg={12} md={12} sm={12} xs={12} className="Parameters block">
                <Grid container>
                    {
                        this.props.parameters.map((parameter, index) => (
                            <Grid item lg={6} md={6} sm={6} xs={6} key={index}>
                                <label htmlFor={parameter.name}>{parameter.placeHolder}</label>
                                <TextField placeholder={parameter.placeHolder} id={parameter.name} value={parameter.value} disabled={parameter.disabled}/>
                            </Grid>
                        ))
                    }
                </Grid>

            </Grid>
        )
    }
}

const mapStateToProps = ({ Actions }) => {
    const { currentAction } = Actions
    const { parameters } = currentAction
    return {
        currentAction,
        parameters
    }
}

export default connect(mapStateToProps)(Parameters);