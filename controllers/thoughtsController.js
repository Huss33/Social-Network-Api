const { Thought, User } = require('../models');

// Aggregate function to get the number of users overall
const headCount = async () =>
  User.aggregate()
    .count('userCount')
    .then((numberOfUsers) => numberOfUsers);

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then(async (users) => {
        const userObj = {
          users,
          headCount: await headCount(),
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findById({ _id: req.params.userId })
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that id' })
          : res.json({
            user,
              grade: await grade(req.params.userId),
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Post a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Update a user
  updateUser(req, res) {
      User.findByIdAndUpdate(
          { _id: req.params.userId },
          { $set: req.body },
          { runValidators: true, new: true }
      )
        .then((user) => 
          !user
          ?res.status(400).json({ 'No user with this id!' })
          : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
  },
  // Delete a student and remove them from the course
  deleteUser(req, res) {
    User.findByIdAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No such user exists' })
          : Thought.findByIdAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((course) =>
        !thought
          ? res.status(404).json({
              message: 'User deleted, but no corresponding thoughts',
            })
          : res.json({ message: 'User and thought successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Add an assignment to a student
//   addAssignment(req, res) {
//     console.log('You are adding an assignment');
//     console.log(req.body);
//     Student.findOneAndUpdate(
//       { _id: req.params.studentId },
//       { $addToSet: { assignments: req.body } },
//       { runValidators: true, new: true }
//     )
//       .then((student) =>
//         !student
//           ? res
//               .status(404)
//               .json({ message: 'No student found with that ID :(' })
//           : res.json(student)
//       )
//       .catch((err) => res.status(500).json(err));
//   },
  // Remove assignment from a student
//   removeAssignment(req, res) {
//     Student.findOneAndUpdate(
//       { _id: req.params.studentId },
//       { $pull: { assignment: { assignmentId: req.params.assignmentId } } },
//       { runValidators: true, new: true }
//     )
//       .then((student) =>
//         !student
//           ? res
//               .status(404)
//               .json({ message: 'No student found with that ID :(' })
//           : res.json(student)
//       )
//       .catch((err) => res.status(500).json(err));
//   },
};