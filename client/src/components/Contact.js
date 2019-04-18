import React, { Component } from 'react';

import Navbar from './layout/Navbar';

export class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = { shrink: true };
    }

    render() {
        return (
            <div>
                <Navbar shrink={this.state.shrink} />
                <section id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="section-title">Contact</h2>
                            </div>

                            <div className="col-6">
                                <form className="contact-form">
                                    <input type="text" placeholder="VOTRE NOM" />
                                    <input type="email" placeholder="VOTRE E-MAIL" />
                                    <input type="text" placeholder="SUJET" />
                                    <textarea placeholder="MESSAGE"></textarea>
                                    <button type="submit" className="button">Envoyer</button>
                                </form>
                            </div>

                            <div className="col-6">
                                <h3 className="section-subtitle">Vous avez une idée en tête ou mieux ... Un projet ! N'hésitez pas à me
                                    contacter par mail ou par téléphone en m'indiquant vos idées, vos envies, tout ce qui vous
                                    semble important pour la réussite de votre projet. Je ferais de mon mieux pour vous répondre
                  dans les plus brefs délais.</h3>

                                <div className="contact-info">
                                    <i className="fas fa-map-marked-alt"></i>
                                    <p>66 Boulevard d'Haussonville, Nancy</p>
                                </div>

                                <div className="contact-info">
                                    <i className="fas fa-mobile-alt"></i>
                                    <p>06 32 23 05 29</p>
                                </div>

                                <div className="contact-info">
                                    <i className="fas fa-paper-plane"></i>
                                    <p>mu.photos@sfr.fr</p>
                                </div>

                                <div className="contact-info">
                                    <p><span>SIRET</span> : 80086588300014</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact;