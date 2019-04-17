const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.category = !isEmpty(data.category) ? data.category : '';
    data.intro = !isEmpty(data.intro) ? data.intro : '';

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Vous devez donner un nom à la galerie';
    }

    if (Validator.isEmpty(data.category)) {
        errors.category = 'Vous devez choisir une catégorie pour la galerie';
    }

    if (Validator.isEmpty(data.intro)) {
        errors.intro = 'Vous devez écrire une introduction';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
