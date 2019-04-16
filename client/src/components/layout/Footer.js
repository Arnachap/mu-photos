import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <div>

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-4 logo">
                                <img className="img-fluid" src="./img/logo/logo-img-white.png" alt="" />
                            </div>

                            <div className="col-4 address">
                                <img src="./img/logo/logo-name-white.png" alt="" />
                                <p>66 boulevard d'Haussonville</p>
                                <p>54000 Nancy</p>
                            </div>

                            <div className="col-4 social">
                                <a href="https://www.facebook.com/MuphotosNancy/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-square"></i>
                                </a>

                                <a href="https://www.instagram.com/muphotosnancy/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>

                                <a href="https://www.mariages.net/photo-mariage/mu-photos--e144717" target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid" src="./img/logo/mariagenet.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;
