const data = require('../../data.json');

module.exports = (req, res) => {
  const userId = +req.params.userId;
  const user = data.users.find(u => u.id === userId);
  res.status(200).json( user );
};