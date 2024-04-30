import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("API");
        const objectToAdd = req.body; 
        const result = await db.collection("Portefolio").insertOne(objectToAdd);
        if (result.acknowledged && result.insertedId) {
            res.status(201).json({ message: "Object added successfully", insertedId: result.insertedId });
        } else {
            throw new Error("Failed to add object to portfolio");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
