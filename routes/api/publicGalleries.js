const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Public Gallery model
const PublicGallery = require('../../models/PublicGallery');

// Validation
const validatePublicGalleryInput = require('../../validation/publicGallery');

// @route   GET api/publicgalleries/test
// @desc    Tests public galleries route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Public Galleries Works' }));

// @route   GET api/publicgalleries
// @desc    Get public galleries
// @access  Public
router.get('/', (req, res) => {
    PublicGallery.find()
        .then(PublicGallery => res.json(PublicGallery))
        .catch(err => res.status(404).json({ nogalleryfound: 'No gallery found' }));
});

// @route   POST api/publicgalleries
// @desc    Create public gallery
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validatePublicGalleryInput(req.body);

    // Check validation
    if (!isValid) {
        // If any errors, send 400 with errors object
        return res.status(400).json(errors);
    }

    const newPublicGallery = new PublicGallery({
        name: req.body.name,
        category: req.body.category,
        intro: req.body.intro
    });

    newPublicGallery.save().then(publicGallery => res.json(publicGallery));
});

module.exports = router;