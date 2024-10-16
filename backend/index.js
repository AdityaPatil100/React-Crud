const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { User } = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create User
app.post('/api/users', async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const user = await User.create({ name, email, age });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update User
app.put('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    await User.update({ name, email, age }, { where: { id } });
    res.status(200).json({ message: 'User updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete User
app.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({ where: { id } });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
