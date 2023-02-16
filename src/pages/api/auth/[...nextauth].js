import jwt from 'jsonwebtoken';

const validUsers = [
  { id: 1, username: 'user1', password: 'pass1' },
  { id: 2, username: 'user2', password: 'pass2' },
  { id: 3, username: 'user3', password: 'pass3' },
  { id: 4, username: 'user4', password: 'pass4' },
];

const secret = process.env.NEXTAUTH_SECRET;

export default async (req, res) => {
  const { username, password } = req.body;

  const user = validUsers.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, username: user.username, user_role: '/bros' }, secret, { expiresIn: '8h' });
  
  res.json({ token });
};