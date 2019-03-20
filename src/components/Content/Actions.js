import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { connect } from 'react-redux';
import $ from 'jquery';

const urlBlock = {display:'inline-block',marginTop:'10px',position:'relative',top:'4px'}

const MethodStyle = { padding: '5px', backgroundColor: 'rgb(62, 114, 138)', color: 'white',}
const BasePathStyle = {backgroundColor: 'rgb(83, 83, 83)',color: 'white',padding: '5px 0px 5px 5px',}
const Action = {padding: '5px 5px 5px 0px',color: 'white',backgroundColor: 'rgb(222, 83, 83)',}
const FabStyle = {display:'inline-block',marginLeft:'50px',backgroundColor:'rgb(37, 180, 109)',color:'white'}

class Actions extends Component {
    
    getMethodResult(){ 
        let callURL = `https://api.wo.softberg.org/?action=${this.props.currentAction.endPoint}`;
        let parameters = {}
        
        this.props.currentAction.parameters.forEach(parameter => {
            parameters[parameter.name] = $(`input[id=${parameter.name}]`).val()
        })

        this.props.dispatch({type:'SET_JSON_STATUS',payload:'Loading'})
        $.ajax({
            url:callURL,
            method:this.props.currentAction.method,
            data:parameters,
            dataType:'json',
            success:(response) => {
                if(response.status !== 'error') {
                    this.props.dispatch({type:'SET_JSON',payload:response})
                    this.props.dispatch({type:'SET_JSON_STATUS',payload:'Success'})
                }
                else {
                    localStorage.removeItem('userInfo');
                    this.props.history.push('/signIn');
                }
            }
        })
    }
    
    render() {
        return (
            <>
                <Grid item lg={12} md={12} sm={12} xs={12} className="block">
                    <div style={urlBlock}>
                        <span style={MethodStyle}> {this.props.currentAction.method.toUpperCase()} </span>
                        <span style={BasePathStyle}>http://api.wo.softberg.org?action=</span>
                        <span style={Action}>{this.props.currentAction.endPoint}</span>
                    </div>
                    <Fab style={FabStyle} onClick={this.getMethodResult.bind(this)}>Call</Fab>
                </Grid>
            </>
        )
    }
}

const mapStateToProps = ({ Actions }) => {
    return { currentAction:Actions.currentAction }
}

export default connect(mapStateToProps)(Actions);