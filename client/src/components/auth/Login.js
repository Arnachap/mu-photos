import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { loginUser } from '../../actions/authActions';

import Navbar from '../layout/Navbar';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
            shrink: true
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            nextProps.props.history.push('/contact');
        }

        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password,
        };

        this.props.loginUser(userData);
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors } = this.state;

        return (
            <div>
                <Navbar shrink={this.state.shrink} />
                <section id="login">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="section-title">Connexion</h2>
                                <h3 className="section-subtitle">Veuillez vous connecter afin d'accéder à votre galerie personnelle.</h3>
                            </div>

                            <div className="col-6 mx-auto">
                                <form onSubmit={this.onSubmit} className="contact-form">
                                    <input
                                        type="email"
                                        className={classnames('', { 'is-invalid': errors.email })}
                                        name="email"
                                        placeholder="E-MAIL"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />

                                    {errors.email && (
                                        <p className="invalid-feedback">{errors.email}</p>
                                    )}

                                    <input
                                        type="password"
                                        className={classnames('', { 'is-invalid': errors.password })}
                                        name="password"
                                        placeholder="MOT DE PASSE"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />

                                    {errors.email && (
                                        <div className="invalid-feedback">{errors.email}</div>
                                    )}

                                    <button type="submit" className="button">Connexion</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);