/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';

type User = { email: string; password: string; confirmPassword: string };

function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const data = req.body as User;

    let users: User[] | undefined;

    if (fs.existsSync('user.json')) {
      users = JSON.parse(fs.readFileSync('user.json', 'utf-8')) as User[];
    }

    if (!users) {
      fs.writeFileSync('user.json', JSON.stringify([data]));
      return res.status(200).json(data);
    }
    console.log(users);

    const user = users.find((user) => user.email === data.email);

    if (user) {
      return res.status(200).json({ error: 'user already exists' });
    } else {
      fs.writeFileSync('user.json', JSON.stringify([...users, data]));
      return res.status(200).json(data);
    }
  }
}

export default handler;
