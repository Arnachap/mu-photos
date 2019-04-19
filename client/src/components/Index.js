import React, { Component } from 'react';

import Navbar from './layout/Navbar';

export class Index extends Component {
    constructor(props) {
        super(props);

        this.state = { shrink: false };

        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 100) {
            this.setState({ shrink: true });
        } else {
            this.setState({ shrink: false })
        }
    }

    render() {
        return (
            <div>
                <Navbar shrink={this.state.shrink} />
                <header>
                    <div id="headerSlider" className="carousel slide carousel-fade" data-interval="3000" data-pause="false" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#headerSlider" data-slide-to="0" className="active"></li>
                            <li data-target="#headerSlider" data-slide-to="1"></li>
                            <li data-target="#headerSlider" data-slide-to="2"></li>
                        </ol>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/img/home/slider1.jpg" className="d-block w-100" alt="" />
                            </div>
                            <div className="carousel-item">
                                <img src="/img/home/slider2.jpg" className="d-block w-100" alt="" />
                            </div>
                            <div className="carousel-item">
                                <img src="/img/home/slider3.jpg" className="d-block w-100" alt="" />
                            </div>
                        </div>
                    </div>
                </header>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="section-title">Portfolio</h2>
                            </div>

                            <div className="col-6">
                                <div className="portfolio-link">
                                    <img className="img-fluid" src="/img/home/mariage.jpg" alt="" />

                                    <a href=""></a>

                                    <div className="caption">
                                        <h3>Le Mariage</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="portfolio-link">
                                    <img className="img-fluid" src="/img/home/premiers-jours.jpg" alt="" />

                                    <a href=""></a>

                                    <div className="caption">
                                        <h3>Les Premiers Jours</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="portfolio-link">
                                    <img className="img-fluid" src="/img/home/portrait.jpg" alt="" />

                                    <a href=""></a>

                                    <div className="caption">
                                        <h3>Portraits</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="portfolio-link">
                                    <img className="img-fluid" src="/img/home/famille.jpg" alt="" />

                                    <a href=""></a>

                                    <div className="caption">
                                        <h3>En Famille</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="portfolio-link">
                                    <img className="img-fluid" src="/img/home/boudoir.jpg" alt="" />

                                    <a href=""></a>

                                    <div className="caption">
                                        <h3>Boudoir</h3>
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

export default Index;