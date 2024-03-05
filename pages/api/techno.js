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

            // Iterate through each user and update the 'techno' array
            for (const user of users) {
                const updatedTechno = user.techno.map(tech => {
                    if (tech === 'technologiesList.mongodb') {
                        return 'https://res.cloudinary.com/df1z0o9nt/image/upload/t_thumb/Projet_Openclassroom/mongodb.jpg';
                    }
                    return tech;
                });

                // Update the document in the collection
                await db.collection("Portefolio").updateOne(
                    { "_id": user._id },
                    { $set: { "techno": updatedTechno } }
                );
            }

            // Fetch the updated users after the update
            const updatedUsers = await db
                .collection("Portefolio")
                .find({})
                .toArray();

            res.json(updatedUsers);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
