import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("API");

        if (req.method === 'POST') {
            // Assurez-vous que les données du corps de la requête contiennent les informations nécessaires pour créer l'objet
            const objectToAdd = req.body; // Supposons que les données du formulaire soient envoyées dans le corps de la requête

            // Insérez l'objet dans la collection "Portefolio"
            const result = await db.collection("Portefolio").insertOne(objectToAdd);

            // Vérifiez si l'insertion a réussi
            if (result.insertedCount === 1) {
                res.status(201).json({ message: "Object added successfully" });
            } else {
                throw new Error("Failed to add object to portfolio");
            }
        } else {
            // Si la méthode HTTP n'est pas prise en charge, renvoyer une réponse avec le code d'état 405 (Method Not Allowed)
            res.status(405).json({ error: 'Method Not Allowed' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
