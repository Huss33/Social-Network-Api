{
  "username"
}

// const connection = require('../config/connection');
// const { Thought, User } = require('../models');
// const { getRandomUserName, getRandomThought } = require('./data');

// connection.on('error', (err) => err);

// connection.once('open', async () => {
//   console.log('connected');

//   // Drop existing courses
//   await Thought.deleteMany({});

//   // Drop existing students
//   await User.deleteMany({});

//   // Create empty array to hold the students
//   const users = [];

//   // Get some random assignment objects using a helper function that we imported from ./data
//   const thoughts = getRandomThought(20);

//   // Loop 20 times -- add students to the students array
//   for (let i = 0; i < 20; i++) {
//     const userName = getRandomUserName();
//     const thoughts = `${userName}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

//     users.push({
//       userName,
//       email,
//       reactions,
//     });
//   }

//   // Add students to the collection and await the results
//   await User.collection.insertMany(users);

//   // Add courses to the collection and await the results
//   await Thought.collection.insertOne({
//     thoughtText: [...thoughts],
//     userName: [...userNames],
//   });

//   // Log out the seed data to indicate what should appear in the database
//   console.table(users);
//   console.table(reactions);
//   console.info('Seeding complete! 🌱');
//   process.exit(0);
// });
