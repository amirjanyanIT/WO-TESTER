import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { connect } from 'react-redux';
import $ from 'jquery';
import moment from 'moment';
const urlBlock = {display:'inline-block',marginTop:'10px',position:'relative',top:'4px'}

const MethodStyle = { padding: '5px',color: 'white'}
const BasePathStyle = {backgroundColor: 'rgb(83, 83, 83)',color: 'white',padding: '5px 0px 5px 5px',}
const Action = {padding: '5px 5px 5px 0px',color: 'white',backgroundColor: 'rgb(37, 180, 109)',}
const FabStyle = {display:'inline-block',marginLeft:'50px',backgroundColor:'rgb(37, 180, 109)',color:'white'}

class Actions extends Component {
    
    getMethodResult(){ 
        let callURL = `https://api.wo.softberg.org/?action=${this.props.currentAction.endPoint}`;
        let parameters = {}
        
        this.props.currentAction.parameters.forEach(parameter => {
            switch(parameter.type){
                case 'text':
                    parameters[parameter.name] = $(`input[id=${parameter.name}]`).val()
                break;
                case 'date':
                    parameters[parameter.name] = moment($(`input[id=${parameter.name}]`).val()).unix()
                break;
                default:
                    parameters[parameter.name] = $(`input[id=${parameter.name}]`).val()
            }
        })

        console.log(parameters);
        this.props.dispatch({type:'SET_JSON_STATUS',payload:'Loading'})
        $.ajax({
            url:callURL,
            method:this.props.currentAction.method,
            data:parameters,
            dataType:'json',
            success:(response) => {
                this.props.dispatch({type:'SET_JSON',payload:response})
                this.props.dispatch({type:'SET_JSON_STATUS',payload:'Success'})
            }
        })
    }
    
    render() {
        return (
            <>
                <Grid item lg={12} md={12} sm={12} xs={12} className="block">
                    <div style={urlBlock}>
                        <span style={MethodStyle} className={`url-method method ${this.props.currentAction.method}`}> {this.props.currentAction.method.toUpperCase()} </span>
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