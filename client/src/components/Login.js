import React, { Component } from 'react';

export class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
    }

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        console.log(userData);
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <section id="login">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="section-title">Connexion</h2>
                                <h3 className="section-subtitle">Veuillez vous connecter afin d'accéder à votre galerie personnelle.</h3>
                            </div>

                            <div className="col-6 mx-auto">
                                <form onSubmit={this.onSubmit} className="contact-form">
                                    <input type="email" name="email" placeholder="E-MAIL" value={this.state.email} onChange={this.onChange} />
                                    <input type="password" name="password" placeholder="MOT DE PASSE" value={this.state.password} onChange={this.onChange} />
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

export default Login;