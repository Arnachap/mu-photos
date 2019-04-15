import React, { Component } from 'react';

export class About extends Component {
    render() {
        return (
            <div>
                <section id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img className="img-fluid" src="./img/about/about.jpg" alt="" />
                            </div>

                            <div className="col-6">
                                <h2 className="section-title">Muriel</h2>

                                <h3>25 ans, gymnaste passionnée<br />et passionnée de photographie. </h3>

                                <p>J'ai toujours aimé les photos, pour garder un souvenir des instants
                                    passés. Pour pouvoir
                                    ouvrir
                                    tous ensemble, ou seul dans son canapé, ou autour de notre famille, l'album qui regroupe tous
                  nos souvenirs de vie.</p>

                                <p>Bref, j'aime les photos ! Alors en grandissant, j'ai appris à les faire
                                    par moi-même. La passion
                  a grandit encore un peu plus ... Et j'ai décidé de faire le premier pas.</p>

                                <p>Ainsi je suis devenue photographe professionnelle en 2014, tout d'abord
                                    pour la gymnastique !
                                    Depuis ce jour, j'ai diversifié mon activité. Désormais je vous propose des séances variées pour
                  répondre à vos envies partager ensemble la joie et l'amour qui anime vos familles.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="testimonials">
                    <div className="container">
                        <h2 className="section-title">Témoignages</h2>

                        <div className="row text-center">
                            <div className="col-4">
                                <div className="testimonial">
                                    <div className="avatar mx-auto">
                                        <img src="./img/testimonial/1.jpg" className="img-fluid" alt="" />
                                    </div>

                                    <h4>Morgane & Baptiste</h4>

                                    <p><i className="fas fa-quote-left"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="testimonial">
                                    <div className="avatar mx-auto">
                                        <img src="./img/testimonial/2.jpg" className="img-fluid" alt="" />
                                    </div>

                                    <h4>Ramona & Michael</h4>

                                    <p><i className="fas fa-quote-left"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="testimonial">
                                    <div className="avatar mx-auto">
                                        <img src="./img/testimonial/3.jpg" className="img-fluid" alt="" />
                                    </div>

                                    <h4>Audrey & Cédrik</h4>

                                    <p><i className="fas fa-quote-left"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default About;