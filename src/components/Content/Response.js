import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import ReactJson from 'react-json-view';
import Loader from 'react-loader-spinner'
const passiveExtraStyle = { color:'rgb(222, 83, 83)', fontWeight:'bold' }

class Response extends Component {
    constructor() {
        super();
        this.state = {
            responseSyntax:'bright:inverted',
        }
    }

    componentDidMount() {
        if(localStorage.getItem('responseSyntax')) {
            this.setState({
                responseSyntax:localStorage.getItem('responseSyntax'),
            })
        }
    }

    changeJsonTheme( {target} ){
        switch(target.innerHTML){
            case 'Light':
                localStorage.setItem('responseSyntax','bright:inverted')
                this.setState({ responseSyntax:'bright:inverted' })
            break;
            case 'Dark':
                localStorage.setItem('responseSyntax','ocean')
                this.setState({ responseSyntax:'ocean' })
            break;
            default:
        }

    }
    render() {
        return (
            <Grid item lg={12} md={12} sm={12} xs={12} className="Response block">
                { this.props.Json.status === 'Passive' && 
                    (<div className="passive-block">
                        <span>Press <span style={passiveExtraStyle}>CALL</span> Button to get result</span>
                     </div>
                    )
                }
                
                { this.props.Json.status === 'Loading' &&   
                    (
                        <div className="loader-style">
                            <Loader type={'CradleLoader'} />
                        </div>
                    )
                }

                {
                  this.props.Json.status === 'Success' &&   
                  (<>
                    <div className="theme-control-block">
                        <button onClick={this.changeJsonTheme.bind(this)}>Light</button>
                        <button onClick={this.changeJsonTheme.bind(this)}>Dark</button>
                    </div>
                    <div className="json-block">
                        <h3>JSON</h3>
                        <ReactJson src={this.props.Json.value} theme={this.state.responseSyntax}/>
                    </div>
                  </>)
                }

            </Grid>
        )
    }
}

let mapStateToProps = ({ Json },dispatch) => {
    return { Json }
}

export default connect(mapStateToProps)(Response);