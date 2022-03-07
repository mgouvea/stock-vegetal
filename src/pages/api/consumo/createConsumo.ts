import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../services/mongodb';

const handlerCreateConsumo = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { method } = req;

    switch (method) {
      case 'POST':
        // acesso ao mongoDB
        const { db } = await connectToDatabase();
        const data = await db.collection('consumo').insertOne(req.body);

        res.status(200).json(data.ops[0]);
        break;
      default:
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handlerCreateConsumo;
