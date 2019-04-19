import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Navbar from '../layout/Navbar';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';


class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shrink: true
        };
    }

    componentDidMount() {
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push('/connexion');
        }
    }

    render() {
        const { user } = this.props.auth;

        const adminDashboard = (
            <AdminDashboard />
        );

        const userDashboard = (
            <UserDashboard />
        );

        return (
            <div>
                <Navbar shrink={this.state.shrink} />
                {user.admin ? adminDashboard : userDashboard}
            </div >
        )
    }
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);