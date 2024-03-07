import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("API");

        if (req.method === 'GET') {

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
