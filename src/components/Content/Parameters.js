import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

// Actions
import SetParameterValueAction from '../../Actions/Content/Parameters/SetParameterValueAction';

class Parameters extends Component {
    setParameterValueHandler({ target }) {
        SetParameterValueAction(this.props.dispatch,target.id, target.value)
    }
    render() {
        return (
            <Grid item lg={12} md={12} sm={12} xs={12} className="Parameters block">
                <Grid container>
                    {
                        this.props.parameters.map((parameter, index) => (
                            <Grid item lg={6} md={6} sm={6} xs={6} key={index}>
                                <Grid container>
                                    <Grid item lg={4} md={4} sm={4} style={{textAlign:'right'}}>
                                        <label htmlFor={parameter.name}>{parameter.name}</label>
                                    </Grid>
                                    <Grid item lg={8} md={8} sm={8} style={{textAlign:'left'}}>
                                        <TextField 
                                            type={parameter.type}
                                            placeholder={parameter.placeHolder} 
                                            id={parameter.name} value={parameter.value} 
                                            disabled={parameter.disabled} 
                                            onChange={this.setParameterValueHandler.bind(this)} 
                                            style={{width:'80%'}}
                                        />
                                    </Grid>
                                </Grid>

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
    return { parameters }
}

export default connect(mapStateToProps)(Parameters);