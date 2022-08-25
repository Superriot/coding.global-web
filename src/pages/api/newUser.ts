/* eslint-disable prefer-const */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

import fs from 'fs';

function handler(req: any, res: any) {
  type User = {
    user: string;
    email: string;
    password: string;
    confirmpassword: string;
  };

  if (req.method === 'POST') {
    const data = req.body as User;

    let usersArrayFile: User[] | undefined;

    if (fs.existsSync('user.json')) {
      usersArrayFile = JSON.parse(fs.readFileSync('user.json', 'utf-8'));
    }

    if (!usersArrayFile) {
      fs.writeFileSync('user.json', JSON.stringify([data]));
      return res.status(200).json({ data });
    }
    const user = usersArrayFile.find(({ email }) => email === data.email);

    if (user) {
      return res.status(400).json({ message: 'user already' });
    } else {
      usersArrayFile.push(data);
      fs.writeFileSync('user.json', JSON.stringify(usersArrayFile));
    }

    res.status(200).json({ data });
  }
}

export default handler;
