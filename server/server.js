const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');


const app = express();
const PORT = 5001;
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(bodyParser.json());

// In-memory database (replace this with a real database in production)
const users = [];

app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  // Hash the password before saving it
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save the user in the in-memory database
  users.push({
    id: users.length + 1,
    username,
    password: hashedPassword,
  });

  res.status(201).json({ message: 'User registered successfully' });
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  // Find the user in the in-memory database
  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  // Compare the provided password with the stored hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  res.status(200).json({ message: 'Login successful' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
