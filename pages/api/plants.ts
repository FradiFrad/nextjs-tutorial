// This function can be deployed as Serverless Functions (also known as Lambdas).
// req = request data (instance of http.IncomingMessage, plus some pre-built middlewares)
// res = response data (instance of http.ServerResponse, plus some helper functions )
import { NextApiRequest, NextApiResponse } from 'next'
import {Db} from '../../lib/db'
export default ( req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req 
    switch (method) {
      case 'GET':
        handleGetPlants()
        break
      case 'POST':
        handlePostPlant(req.body)
        break
      default:
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
}


function handleGetPlants() {}

async function handlePostPlant(plantData) {
  try {
    const plant = await Db.one(
      'INSERT INTO plants (name, description, water-needs, sun-needs) VALUES ');
    res.status(200).json(plant);
 } catch (e) {
    console.error(e);
    res.status(500).end();
 }