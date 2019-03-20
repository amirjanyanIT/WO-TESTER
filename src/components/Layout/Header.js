import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Title from '../Title';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Header extends Component {
    logOut() {
        localStorage.removeItem('userInfo');
        this.props.history.push('signIn');
    }
    render() {
        return (
            <div className="Header">
                <Grid container>
                    <Grid item md={12} sm={8} xs={10} lg={12}>
                        <Grid container>
                            <Grid item md={11} sm={11} xs={11} lg={11} >
                                <Title/>
                            </Grid>
                            <Grid item md={1} sm={1} xs={1} lg={1} className="log-out">
                                <span onClick={this.logOut.bind(this)}>Logout</span>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {state}
}

export default connect(mapStateToProps)(withRouter(Header));