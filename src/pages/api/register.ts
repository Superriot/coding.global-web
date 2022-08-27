/* eslint-disable prefer-const */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

function handler(req: NextApiRequest, res: NextApiResponse) {
  type User = {
    user: string;
    email: string;
    password: string;
    confirmassword: string;
  };

  if (req.method === 'POST') {
    let usersArrayFile: User[] | undefined;

    const data = req.body as User;

    if (fs.existsSync('user.json')) {
      usersArrayFile = JSON.parse(fs.readFileSync('user.json', 'utf-8'));
    }

    if (!usersArrayFile) {
      fs.writeFileSync('user.json', JSON.stringify([data]));
      return res.status(200).json({ email: data.email });
    }
    const user = usersArrayFile.find(({ email }) => email === data.email);

    if (user) {
      return res.status(200).json({ message: 'user already exist' });
    } else {
      usersArrayFile.push(data);
      fs.writeFileSync('user.json', JSON.stringify(usersArrayFile));
    }

    res.status(200).json({ email: data.email });
  }
}

export default handler;
