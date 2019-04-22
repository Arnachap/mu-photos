import React, { Component } from 'react';
import PropTypes from 'prop-types';


class PublicGalleriesList extends Component {
    render() {
        const { publicGalleries } = this.props;

        return publicGalleries.map(publicGallery => {
            if (publicGallery.category === 'amoureux') {
                return <h2>{publicGallery.name}</h2>
            }
        })
    }
}

PublicGalleriesList.propTypes = {
    publicGalleries: PropTypes.array.isRequired
}

export default PublicGalleriesList;