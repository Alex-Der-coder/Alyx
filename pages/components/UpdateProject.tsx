import React, { useState } from 'react';
import axios from 'axios';

const UpdateProject = () => {
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
        <form className='w-full h-full flex justify-center content-center items-center flex-col' onSubmit={handleSubmit}>
            <label htmlFor="projectId">ID du Projet:</label>
            <input type="number" id="projectId" name="id" value={formData.id} onChange={handleChange} required /><br />

            <label htmlFor="projectName">Nom du Projet:</label>
            <input type="text" id="projectName" name="name" value={formData.name} onChange={handleChange} required /><br />

            <label htmlFor="projectCover">Couverture du Projet (URL):</label>
            <input type="text" id="projectCover" name="cover" value={formData.cover} onChange={handleChange} required /><br />

            <label htmlFor="projectDescription">Description du Projet:</label><br />
            <textarea id="projectDescription" name="description" value={formData.description} onChange={handleChange} required></textarea><br />

            <label htmlFor="projectTechno">Technologies Utilisées (séparées par des virgules):</label>
            <input type="text" id="projectTechno" name="techno" value={formData.techno} onChange={handleChange} required /><br />

            <label htmlFor="projectLink">Lien vers le Projet:</label>
            <input type="text" id="projectLink" name="link" value={formData.link} onChange={handleChange} required /><br />

            <label htmlFor="projectRepos">Lien vers le Repository:</label>
            <input type="text" id="projectRepos" name="repos" value={formData.repos} onChange={handleChange} required /><br />

            <label htmlFor="projectContext">Contexte du Projet:</label><br />
            <textarea id="projectContext" name="contexte" value={formData.contexte} onChange={handleChange} required></textarea><br />

            <button type="submit">Mettre à jour le Projet</button>
        </form>
    );
};

export default UpdateProject;
