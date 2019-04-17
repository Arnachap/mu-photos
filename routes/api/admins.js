const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load Input Validation
const validateAdminLoginInput = require('../../validation/adminLogin');

// Load admin model
const Admin = require('../../models/Admin');

// @route   GET api/admins/test
// @desc    Tests admins route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'admins works' }));

// @route   POST api/admins/login
// @desc    Login admin / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
    const { errors, isValid } = validateAdminLoginInput(req.body);

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const name = req.body.name;
    const password = req.body.password;

    // Find admin by name
    Admin.findOne({ name }).then(admin => {
        // Check for admin
        if (!admin) {
            return res.status(400).json({ name: 'Le nom d\'administrateur est incorrect.' });
        }

        // Check password
        bcrypt.compare(password, admin.password).then(isMatch => {
            if (isMatch) {
                // Admin Matched
                // Create JWT Payload
                const payload = { id: admin.id, name: admin.name };

                // Sign Token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 604800 },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: 'Bearer ' + token
                        });
                    }
                );
            } else {
                return res.status(400).json({ password: 'Mot de passe incorrect' });
            }
        });
    });
});

module.exports = router;