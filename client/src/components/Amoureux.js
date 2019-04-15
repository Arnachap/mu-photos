import React, { Component } from 'react';

export class Amoureux extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="section-title">En Amoureux</h2>
                                <h3 className="section-subtitle">Ahh l'Amour, l'Amour, l'Amour...
                                    <br />Oui l'Amour j'y mets un GRAND A,
                                    puisqu'il est pour moi très important et qu'il s'agit certainement du plus grand et beau
                                    sentiment qui existe. J'adore photographier les amoureux, en toute saison et concevoir avec vous
                                    de jolies photographies.
                                    Que ce soit juste pour créer de jolis souvenirs, ou bien pour une
                                    séance "engagement" en vue d'une union ...</h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-4">
                                <div className="album-link">
                                    <img className="img-fluid" src="./img/gallery/baptiste-morgane.jpg" alt="" />

                                    <a href="./album.html"></a>

                                    <div className="caption">
                                        <h3>Morgane & Baptiste</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="album-link">
                                    <img className="img-fluid" src="./img/gallery/charlotte-jhonas.jpg" alt="" />

                                    <a href="./album.html"></a>

                                    <div className="caption">
                                        <h3>Charlotte & Jhonas</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="album-link">
                                    <img className="img-fluid" src="./img/gallery/celine-bruno.jpg" alt="" />

                                    <a href="./album.html"></a>

                                    <div className="caption">
                                        <h3>Céline & Bruno</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="album-link">
                                    <img className="img-fluid" src="./img/gallery/amelie-arnaud.jpg" alt="" />

                                    <a href="./album.html"></a>

                                    <div className="caption">
                                        <h3>Amélie & Arnaud</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="album-link">
                                    <img className="img-fluid" src="./img/gallery/audrey-cedrik.jpg" alt="" />

                                    <a href="./album.html"></a>

                                    <div className="caption">
                                        <h3>Audrey & Cédrik</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="album-link">
                                    <img className="img-fluid" src="./img/gallery/ramona-michael.jpg" alt="" />

                                    <a href="./album.html"></a>

                                    <div className="caption">
                                        <h3>Ramona & Michael</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Amoureux;