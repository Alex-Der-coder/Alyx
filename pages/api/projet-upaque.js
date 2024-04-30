import { ObjectId } from 'mongodb';
import clientPromise from "../../lib/mongodb";


export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("API");
        
        if (req.method === 'POST') {
            // Récupérer l'ID depuis la requête
            const { id, ...updatedFields } = req.body; 
            console.log("ID récupéré du corps de la requête :", id);

            // Vérifier si l'ID est fourni
            if (!id) {
                return res.status(400).json({ error: 'Missing ID parameter' });
            }

            try {

                // Récupérer tous les projets
                const projects = await db.collection("Portefolio").find({}).toArray();
                console.log(projects);

                // Chercher le projet correspondant à l'ID dans le tableau de tous les projets
                const projectToUpdate = projects.find(project => project.id.toString() === id);

                console.log("Résultat de la recherche  :", projectToUpdate);

                if (!projectToUpdate) {
                    return res.status(404).json({ error: "Project not found" });
                }
                console.log("Identifiant unique du projet :", projectToUpdate._id);
                
                const projectId = projectToUpdate._id.toString();

// Extraire l'identifiant unique du projet sans le préfixe "new ObjectId()"
                const projectIdWithoutPrefix = projectId.substring();
                console.log(projectIdWithoutPrefix);

                
  
                // Mettre à jour le projet avec les champs spécifiés
                const result = await db.collection("Portefolio").updateOne(
                    { _id: ObjectId(projectIdWithoutPrefix) },
                    { $set: updatedFields }
                );
                console.log("Résultat de la mise à jour :", result);

                if (result.matchedCount > 0) {
                    if (result.modifiedCount > 0) {
                        res.status(200).json({ message: "Project updated successfully" });
                    } else {
                        res.status(200).json({ message: "No changes made to the project" });
                    }
                } else {
                    res.status(404).json({ error: "Project not found" });
                }
            } catch (error) {
                console.error(error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
        } else {
            res.status(405).json({ error: 'Method Not Allowed' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
