const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomUserName, getRandomThought } = require('../seeds/data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await Thought.deleteMany({});

  await User.deleteMany({});

  const users = [];

  const thoughts = getRandomThought(10);

  for (let i = 0; i < 20; i++) {
    const userName = getRandomUserName();
    // const thoughts = `${userName}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    users.push({
      userName,
      email,
      reactions,
    });
  }

  await User.collection.insertMany(users);

  await Thought.collection.insertOne({
    thoughtText: [...thoughts],
    userName: [...userNames],
  });

  console.table(users);
  console.table(reactions);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
