const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateAdminLoginInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Vous devez entrer votre nom d\'administrateur';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Vous devez entrer votre mot de passe';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
