import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// Actions
import SetParameterValueAction from '../../Actions/Content/Parameters/SetParameterValueAction';

class Parameters extends Component {
    setParameterValueHandler({ target }) {
        if(target.type !== 'file') {
            SetParameterValueAction(this.props.dispatch,target.name, target.value)
        }
        else {
            SetParameterValueAction(this.props.dispatch,target.name, target.files[0]);
        }
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
                                    
                                        {parameter.type === 'text' || parameter.type === 'datetime-local' ? 
                                            (<TextField 
                                                type={parameter.type}
                                                placeholder={parameter.placeHolder} 
                                                name={parameter.name} 
                                                value={parameter.value}
                                                disabled={parameter.disabled} 
                                                onChange={this.setParameterValueHandler.bind(this)} 
                                                style={{width:'80%'}}
                                            />)
                                        : '' }

                                        {parameter.type === 'select' && 
                                            (<Select
                                                id={parameter.name}
                                                disabled={parameter.disabled}
                                                onChange={this.setParameterValueHandler.bind(this)}
                                                style={{width:'80%'}}
                                                name={parameter.name}
                                                value={parameter.value ? parameter.value : 'placeHolder' }>
                                                <MenuItem value='placeHolder' disabled>{parameter.placeHolder}</MenuItem>
                                                {parameter.options.map((option,key) => {
                                                    return <MenuItem key={key} value={option}>{option}</MenuItem>
                                                })}
                                            </Select>)
                                        }

                                        {parameter.type === 'file' &&
                                            (<Button
                                                label='My Label'
                                                variant="contained"
                                                color="primary"
                                                className="file-input">
                                                <input 
                                                    type="file" 
                                                    onChange={this.setParameterValueHandler.bind(this)}
                                                    disabled={parameter.disabled}
                                                    name={parameter.name}
                                                />
                                             </Button>)
                                        }
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