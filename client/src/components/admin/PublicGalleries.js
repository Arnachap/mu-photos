import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addGallery } from '../../actions/publicGalleryAction';

class PublicGalleries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      intro: '',
      errors: {}
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newGallery = {
      name: this.state.name,
      category: this.state.category,
      intro: this.state.intro
    };

    this.props.addGallery(newGallery);
    this.setState({
      name: '',
      category: '',
      intro: ''
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6 mx-auto">
              <form onSubmit={this.onSubmit} className="pt-5">
                <div className="form-group">
                  <label htmlFor="name">Nom :</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="category">Catégorie :</label>
                  <select
                    name="category"
                    id="category"
                    className="form-control"
                    value={this.state.category}
                    onChange={this.onChange}>

                    <option value="amoureux">En Amoureux</option>
                    <option value="mariage">Le Mariage</option>
                    <option value="enceinte">En Attendant Bébé</option>
                    <option value="bebe">Les Premiers Jours</option>
                    <option value="famille">Le Bonheur en famille</option>
                    <option value="boudoir">Boudoir</option>
                    <option value="portraits">Portraits</option>
                    <option value="sport">Sport</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="intro">Intro :</label>
                  <textarea
                    name="intro"
                    id="intro" rows="5"
                    className="form-control"
                    value={this.state.intro}
                    onChange={this.onChange}
                  />
                </div>

                <button type="submit" className="button">Créer la gallerie</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

PublicGalleries.propTypes = {
  addGallery: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { addGallery })(PublicGalleries);