import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("API");

        // Assurez-vous que les données du corps de la requête contiennent les informations nécessaires pour créer l'objet
        const objectToAdd = req.body; // Supposons que les données du formulaire soient envoyées dans le corps de la requête

        // Insérez l'objet dans la collection "Portefolio"
        const result = await db.collection("Portefolio").insertOne(objectToAdd);

        // Vérifiez si l'insertion a réussi
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
