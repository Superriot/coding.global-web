/* eslint-disable @typescript-eslint/no-explicit-any */
function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const data = req.body;
    // console.log(data)

    // const { email, password, confirmPassword } = data;

    res.status(201).json({ data });
  }
}

export default handler;
