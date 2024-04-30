
import React from "react"
import ProjetUpdate  from '../../components/UpdateProject'
import { useState} from 'react'

export default function Dashboard() {


  const [formData, setFormData] = useState({
    id: '',
    name: '',
    cover: '',
    description: '',
    techno: [],
    link: '',
    repos: '',
    contexte: ''
});
const handleChange = (e: { target: { name: any; value: any; }; }) => {
  const { name, value } = e.target;
  if (name === "techno") {
      // Si le champ est "techno", séparez les valeurs par des virgules et stockez-les dans un tableau
      const technoArray = value.split(',');
      setFormData({ ...formData, [name]: technoArray });
  } else {
      setFormData({ ...formData, [name]: value });
  }
};
const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
        // Envoi des données au backend pour la mise à jour du projet
        const response = await fetch('http://localhost:3000/api/projet-upaque', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        console.log(data);
        // Réinitialisation du formulaire après la soumission réussie 
        setFormData({
            id: '',
            name: '',
            cover: '',
            description: '',
            techno: [],
            link: '',
            repos: '',
            contexte: ''
        });
    } catch (error) {
        console.error('Error updating project:', error);
        // Gérer les erreurs
    }
};

    return (
    <div className='w-full h-full flex justify-center content-center items-center'>
        <img src="https://res.cloudinary.com/df1z0o9nt/image/upload/s--NZ-_7Whm--/f_webp/q_auto:good/Projet_Openclassroom/papillon-fleurs_ysyssc.jpg" alt="" className="w-full object-cover  min-[320px]:h-full" loading="lazy" />
            <form className='flex flex-col justify-around items-center bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 absolute w-[37%] h-[75%] min-[320px]:w-auto  max-[970px]:top-[25%] ' onSubmit={handleSubmit}>
            <h1 className="text-center">Tool for updatedValue of project in Portefolio</h1>
            <label htmlFor="projectId"><h2>ID du Projet:</h2></label>
            <input type="text" id="projectId" name="id" value={formData.id} onChange={handleChange} required /><br />

            <label htmlFor="projectName"><h2>Nom du Projet:</h2></label>
            <input type="text" id="projectName" name="name" value={formData.name} onChange={handleChange} required /><br />

            <label htmlFor="projectCover"><h2>Couverture du Projet (URL):</h2></label>
            <input type="text" id="projectCover" name="cover" value={formData.cover} onChange={handleChange} required /><br />

            <label htmlFor="projectDescription"><h2>Description du Projet:</h2></label><br />
            <textarea id="projectDescription" name="description" value={formData.description} onChange={handleChange} required></textarea><br />

            <label htmlFor="projectTechno"><h2>Technologies Utilisées:</h2></label>
            <input type="text" id="projectTechno" name="techno" value={formData.techno} onChange={handleChange} required /><br />

            <label htmlFor="projectLink"><h2>Lien vers le Projet:</h2></label>
            <input type="text" id="projectLink" name="link" value={formData.link} onChange={handleChange} required /><br />

            <label htmlFor="projectRepos"><h2>Lien vers le Repository:</h2></label>
            <input type="text" id="projectRepos" name="repos" value={formData.repos} onChange={handleChange} required /><br />

            <label htmlFor="projectContext"><h2>Contexte du Projet:</h2></label><br />
            <textarea id="projectContext" name="contexte" value={formData.contexte} onChange={handleChange} required></textarea><br />

            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2" type="submit">Mettre à jour le Projet</button>
            </form>
        </div>
    );
};

