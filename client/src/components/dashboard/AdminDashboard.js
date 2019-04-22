import React, { Component } from 'react'

import Clients from '../admin/Clients';
import PublicGalleries from '../admin/publicGalleries/PublicGalleries';

class AdminDashboard extends Component {
    constructor() {
        super();
        this.state = {
            clients: false,
            privateGalleries: false,
            publicGalleries: false
        };
    }

    resetStates = () => {
        this.setState({
            clients: false,
            privateGalleries: false,
            publicGalleries: false
        });
    }

    onClick = e => {
        this.resetStates();
        this.setState({ [e.target.id]: true });
    }

    render() {
        return (
            <div>
                <section className="container">
                    <h1 className="section-title">Administration</h1>

                    <div className="row">
                        <div className="btn-group mx-auto" role="group" aria-label="Basic example">
                            <button onClick={this.onClick} type="button" className="button" id="clients">Clients</button>
                            <button onClick={this.onClick} type="button" className="button" id="privateGalleries">Galleries Privées</button>
                            <button onClick={this.onClick} type="button" className="button" id="publicGalleries">Galleries Publiques</button>
                        </div>
                    </div>

                    {this.state.clients ? <Clients /> : ""}
                    {this.state.publicGalleries ? <PublicGalleries /> : ""}
                </section>
            </div>
        )
    }
}

export default AdminDashboard;
