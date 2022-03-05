import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../services/mongodb';

const handlerVegetal = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;

    switch (method) {
      case 'GET':
        // acesso ao mongoDB
        const { db } = await connectToDatabase();
        const data = await db.collection('vegetal').find().toArray();

        res.status(200).json(data);
        break;
      default:
        res.setHeader('Allow', ['GET', 'PUT']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handlerVegetal;
