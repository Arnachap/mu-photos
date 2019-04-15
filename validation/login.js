const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if (!Validator.isEmail(data.email)) {
        errors.email = 'L\'email n\'est pas valide';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Vous devez entrer votre adresse Email';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Vous devez entrer votre mot de passe';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
