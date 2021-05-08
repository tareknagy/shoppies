const { Redirect } = require("react-router");
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    manageNominations,
    nominations
};

async function nominations(req, res) {
  const user = await User.getUser(req.user._id);
  res.json(user.nominations);
}

async function create(req, res) {
    try {
        // Add user
        const user = await User.create(req.body);
        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) throw new Error();
      const match = await bcrypt.compare(req.body.password, user.password);
      if (match) {
        const token = createJWT(user);
        res.json(token);
      } else {
        throw new Error();
      }
    } catch {
      res.status(400).json('Bad Credentials');
    }
}
async function manageNominations(req, res) {
  const user = await User.getUser(req.user._id);
  // Delete if there, prevent more than 5.
  if (user.nominations.indexOf(req.params.id) > 0) {
    user.nominations.splice(user.nominations.indexOf(req.params.id), 1);
  } else {
    user.nominations.length >= 5 ? console.log('You already have 5 nominations!') : user.nominations.push(req.params.id);
  }
  user.save();
  res.json(user)
;}


// Helper functions
function createJWT(user) {
    return jwt.sign(
        { user }, 
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}