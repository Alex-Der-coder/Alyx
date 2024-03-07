import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("API");

        if (req.method === 'GET') {

            res.setHeader('Access-Control-Allow-Origin', 'https://portefoliov3-beta.vercel.app/');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            
            // Fetching Users
            const users = await db
                .collection("Portefolio")
                .find({})
                .sort({ metacritic: -1 })
                .toArray();

            res.json(users);
        } // Ajout de cette accolade manquante
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
