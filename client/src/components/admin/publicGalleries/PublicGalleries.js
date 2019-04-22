import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPublicGalleries } from '../../../actions/publicGalleryActions';

import AddPublicGallery from './AddPublicGallery';
import PublicGalleriesList from './PublicGalleriesList';

class PublicGalleries extends Component {
  componentDidMount() {
    this.props.getPublicGalleries();
  }

  render() {
    const { publicGalleries } = this.props.publicGallery;

    let publicGalleryContent = <PublicGalleriesList publicGalleries={publicGalleries} />

    return (
      <div>
        <div className="container">
          {publicGalleryContent}
          <AddPublicGallery />
        </div>
      </div>
    )
  }
}

PublicGalleries.propTypes = {
  getPublicGalleries: PropTypes.func.isRequired,
  publicGallery: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  publicGallery: state.publicGallery
})

export default connect(mapStateToProps, { getPublicGalleries })(PublicGalleries);