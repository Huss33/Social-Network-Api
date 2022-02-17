const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtsController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:userId')
.get(getSingleThought)
.update(updateThought)
.delete(deleteThought);

router.route('/:studentId/reactions').post(addReaction);

router.route('/:studentId/reactions/:reactionId').delete(removeReaction);

module.exports = router;