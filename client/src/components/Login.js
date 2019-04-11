import React from 'react'

const Login = () => {
    return (
        <div>
            <section id="login">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section-title">Connexion</h2>
                            <h3 className="section-subtitle">Veuillez vous connecter afin d'accéder à votre galerie personnelle.
                    </h3>
                        </div>

                        <div className="col-6 mx-auto">
                            <form className="contact-form">
                                <input type="email" placeholder="E-MAIL" />
                                <input type="password" placeholder="MOT DE PASSE" />
                                <button type="submit" className="button">Connexion</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login