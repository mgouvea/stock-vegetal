import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../services/mongodb';

const handlerVegetal = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;
    const dataDelete = req.body;
    const { db } = await connectToDatabase();

    switch (method) {
      case 'GET':
        // acesso ao mongoDB
        const data = await db.collection('vegetal').find().toArray();

        res.status(200).json(data);
        break;
      case 'DELETE':
        await db.collection('vegetal').deleteOne(dataDelete);

        break;
      default:
        res.setHeader('Allow', ['GET', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handlerVegetal;
