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
                .toArray();

                
            res.json(users);
        } 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
