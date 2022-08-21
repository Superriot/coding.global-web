/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

import fs from 'fs';

type User = { email: any; password: any; confirmpassword: any };

function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const data = req.body as User;

    res.status(200).json({ data });

    fs.writeFileSync('user.json', JSON.stringify([data]));

    // if file exist
    if (fs.existsSync('user.json')) {
      console.log('Datai existier');
    } else {
      console.log('Dateie existiert nicht');
    }
  }
}

export default handler;
