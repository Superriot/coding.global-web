/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const data = req.body;

    res.status(200).json({ message: 'Created user!' });
  }
}

export default handler;
