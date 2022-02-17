const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    addfriend,
    removeFriend,
} = require('../../controllers/usersController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId')
.get(getSingleUser)
.update(updateUser)
.delete(deleteUser);

router.route('/:userId/friends').post(addfriend);

router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
