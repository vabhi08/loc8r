const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlReviews = require('../controllers/reviews');

// locations
// defines routes for locations

router
    .route('/locations')
    .get(ctrlLocations.locationsListByDistance)
    .post(ctrlLocations.locationsCreate);

    router
    .route('/locations/:locationid')
    .get(ctrlLocations.locationsReadOne)
    .put(ctrlLocations.locationsUpdateOne)
    .delete(ctrlLocations.locationsDeleteOne);

// reviews
//  defining routes for reviews
router
    .route('/locations/:locationid/reviews')
    .post(ctrlReviews.reviewsCreate);

router
    .route('/lcoations/:locationid/reviews/:reviewid')
    .get(ctrlReviews.reviewsReadOne)
    .put(ctrlReviews.reviewsUpdateOne)
    .delete(ctrlReviews.reviewsDeleteOne);

module.exports = router;