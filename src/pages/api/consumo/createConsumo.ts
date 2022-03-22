import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../services/mongodb';

const handlerCreateConsumo = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { method } = req;
    const { db } = await connectToDatabase();
    const dataConsumo = req.body;

    switch (method) {
      case 'POST':
        // acesso ao mongoDB
        const data = await db.collection('consumo').insertOne(dataConsumo);

        const updateVegetalCod = await db.collection('vegetal').findOne({ cod: dataConsumo.cod });
        await db
          .collection('vegetal')
          .updateOne(
            { _id: updateVegetalCod._id },
            { $inc: { qtdAtual: -dataConsumo.consumo } }
          );

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
