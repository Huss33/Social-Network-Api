const userNames = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhong',
    'Zhuo',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
  ];
  
  const thoughts = [
    'We chase happiness but do not get it too often. Will we get it; if we stop chasing it?',
    'Is it right to do nothing at times and just feel happy about it?',
    'Cakes are important in birthdays, anniversaries, baby showers, weddings, and what not; still it is not the main course menu, just a dessert palate. Wonder why?',
    'What would happen; if the sun does not rise tomorrow and its all dark around; how will the world look like?',
    'Which statement is correct? A bottle is half-filled or a bottle half empty.',
    'What is more important for you? Chasing dreams or accomplishing goals.',
    'Saying "sorry" and "thank you" too often is a sign of courtesy that everyone does and few only feel.railers',
    'The words wire and fire consist of three same letters and one, unlike letter? Think of a few more such words?',
    'Celebrating birthdays is a reminder that we have one less year to live in this world.',
    'The irony of life is, just as we celebrate our birthdays every year; we also pass our death date every year; its just we are not aware of it.',
    'Have you ever tried sleeping with eyes wide open? ',
    'Can we have a new world only with short men and tall women?',
    'Birthday wishes come with tons of love and best wishes. How to measure tons?',
    'Snails play hide and seek with us. When touched, it gets into the shell and again makes a sneak peek out.',
    'Incorrect is spelled incorrect in a dictionary.',
    'A parcel sent by a car is called a shipment, but a parcel sent by a ship is called Cargo. Why is it so?',
    'In an aircraft, which armrest is yours, if you sit in the middle?',
    'What happens when a poison expires? Does it become more poisonous or no longer remains so?',
  ];
  
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  const getRandomUserName = () =>
    `${getRandomArrItem(userNames)}`;
  
  const getRandomThought = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thought: getRandomArrItem(thoughts)
      });
    }
    return results;
  };
  
  module.exports = { getRandomUserName, getRandomThought };