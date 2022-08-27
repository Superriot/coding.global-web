/* eslint-disable prefer-const */
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data = req.body as User;

    type User = {
      email: string;
      password: string;
    };

    let usersArrayFile: User[];

    if (fs.existsSync('user.json')) {
      usersArrayFile = JSON.parse(fs.readFileSync('user.json', 'utf-8'));
      const user = usersArrayFile.find(
        ({ email, password }) =>
          email === data.email && password === data.password
      );
      if (user) {
        return res.status(200).json({ email: user.email });
      } else {
        return res.status(200).json({ message: 'Error Login' });
      }
    } else {
      return res.status(200).json({ message: 'Falsch' });
    }
  }
};
export default handler;
