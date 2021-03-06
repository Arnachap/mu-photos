import React, { Component } from 'react';

import Navbar from './layout/Navbar';

export class Prestations extends Component {
    constructor(props) {
        super(props);

        this.state = { shrink: true };
    }

    render() {
        return (
            <div>
                <Navbar shrink={this.state.shrink} />
                <section>
                    <div className="container-fluid">
                        <h2 className="section-title">Ce que je vous propose...</h2>

                        <div className="row">
                            <div className="col">
                                <div className="prestation">
                                    <img src="./img/prestations/1.jpg" alt="" />

                                    <h3>Bout de chou</h3>

                                    <p>Des photos de votre enfant,<br />dans son petit cocon.</p>

                                    <p>Des souvenirs de<br />ces premiers jours avec vous.</p>

                                    <p>Pensez-y aussi<br />pour les faire parts.</p>
                                </div>
                            </div>

                            <div className="col">
                                <div className="prestation">
                                    <img src="./img/prestations/2.jpg" alt="" />

                                    <h3>Signature</h3>

                                    <p>Créons ensemble un reportage photos qui vous ressemble,<br />des préparatifs à l'arrivée de la
                      pièce montée.</p>

                                    <p>Des formules modulables<br />pour répondre à vos envies.</p>

                                    <p>Pensez-y aussi<br />pour les faire parts.</p>
                                </div>
                            </div>

                            <div className="col">
                                <div className="prestation">
                                    <img src="./img/prestations/3.jpg" alt="" />

                                    <h3>Boudoir</h3>

                                    <p>Une séance photo à domicile,<br />tout en charme et en douceur.</p>

                                    <p>Un moment privilégié pour exprimer sa féminité.</p>

                                    <p>De quoi ravir votre coeur<br />et celui de votre moitié.</p>
                                </div>
                            </div>

                            <div className="col">
                                <div className="prestation">
                                    <img src="./img/prestations/4.jpg" alt="" />

                                    <h3>Grossesse</h3>

                                    <p>Un moment tout en douceur,<br />pour sublimer votre corps de future Maman.</p>

                                    <p>Et garder à jamais des souvenirs de ce moment si particulier.</p>
                                </div>
                            </div>

                            <div className="col">
                                <div className="prestation">
                                    <img src="./img/prestations/5.jpg" alt="" />

                                    <h3>Famille</h3>

                                    <p>Un moment rempli de rires et de partage pour créer tous ensemble de jolis souvenirs de votre
                      tribu.</p>

                                    <p>A offrir ou à s'offrir.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col prestation">
                                <p className="price">150 €</p>
                            </div>

                            <div className="col prestation">
                                <p className="price">
                                    <a href="./pdf/tarifs-mariage-2019.pdf" target="_blank">Découvrez<br />nos formules</a>
                                </p>
                            </div>

                            <div className="col prestation">
                                <p className="price">120 €</p>
                            </div>

                            <div className="col prestation">
                                <p className="price">100 €</p>
                            </div>

                            <div className="col prestation">
                                <p className="price">100 €</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Prestations;
