const index = async (req, res) => {
  const result = await { data: 'This is a simple message that\'s been updated.' };
  res.json(result);
};

module.exports = { index };
