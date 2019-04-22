import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Navbar extends Component {
    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
        window.location.reload();
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        const userLinks = (
            <li className="nav-item">
                <a href="#" onClick={this.onLogoutClick.bind(this)} className="nav-link"><i class="fas fa-sign-out-alt"></i></a>
            </li>
        );

        return (
            <div>
                <nav className={`navbar navbar-expand-lg fixed-top ${this.props.shrink ? 'navbar-shrink' : ''}`} id="mainNav">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img id="logo-img" src={`/img/logo/logo-img${!this.props.shrink ? '-white' : ''}.png`} alt="" />
                            <img id="logo-name" src={`/img/logo/logo-name${!this.props.shrink ? '-white' : ''}.png`} alt="" />
                        </Link>

                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav text-uppercase ml-auto">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link" to="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        Galerie
                                    </Link>

                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/en-amoureux">En amoureux</Link>
                                        <Link className="dropdown-item" to="/">Le Mariage</Link>
                                        <Link className="dropdown-item" to="/">En attendant bébé</Link>
                                        <Link className="dropdown-item" to="/">Les premiers jours</Link>
                                        <Link className="dropdown-item" to="/">Le bonheur en famille</Link>
                                        <Link className="dropdown-item" to="/">Boudoir</Link>
                                        <Link className="dropdown-item" to="/">Portraits</Link>
                                        <Link className="dropdown-item" to="/">Sport</Link>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/a-propos">A propos</Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link" to="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        Contact
                                    </Link>

                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/prestations">Préstations</Link>

                                        <Link className="dropdown-item" to="/contact">Contact</Link>
                                    </div>
                                </li>


                                <li className="nav-item">
                                    <Link className="nav-link" to={isAuthenticated ? '/compte' : '/connexion'}>Clients</Link>
                                </li>

                                {isAuthenticated ? userLinks : ''}

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );

    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(Navbar);