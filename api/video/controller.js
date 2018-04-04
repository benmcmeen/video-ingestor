const index = async (req, res) => {
  const result = await { data: 'This is a simple message.' };
  res.json(result);
};

module.exports = { index };
