import React, { useState } from 'react';


    const ManageProjet = () => {

        const [formData, setFormData] = useState({
          name: '',
          id: '',
          cover: '',
          description: '',
          techno: [],
          link: '',
          repos: '',
          contexte: ''
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          let updatedValue = value;
        
          // Vérifiez si le champ modifié est 'techno'
          if (name === 'techno') {
            // Si la valeur est une chaîne, séparez-la en un tableau d'URLs
            if (typeof value === 'string') {
              updatedValue = value.split(',').map(item => item.trim());
            }
            // Sinon, la valeur est déjà un tableau, pas besoin de traitement supplémentaire
          }
        
          setFormData(prevState => ({
            ...prevState,
            [name]: updatedValue
          }));
        };
        
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            console.log("Form data:", formData);

            const response = await fetch('http://localhost:3000/api/projet_add', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });
            if (response.ok) {
              console.log("Object added successfully");
              // Réinitialisez le formulaire ici si nécessaire
            } else {
              console.error("Failed to add object:", response.statusText);
            }
          } catch (error) {
            console.error("Failed to add object:", error);
          }
        };
  return (
    <div>
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          ID:
          <input type="number" name="id" value={formData.id} onChange={handleChange} />
        </label>
        <br />
        <label>
          Cover Image URL:
          <input type="text" name="cover" value={formData.cover} onChange={handleChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>
        <br />
        <label>
          Technologies (comma separated):
          <input type="text" name="techno" value={formData.techno} onChange={handleChange} />
        </label>
        <br />
        <label>
          Link:
          <input type="text" name="link" value={formData.link} onChange={handleChange} />
        </label>
        <br />
        <label>
          Repository URL:
          <input type="text" name="repos" value={formData.repos} onChange={handleChange} />
        </label>
        <br />
        <label>
          Context:
          <textarea name="contexte" value={formData.contexte} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default ManageProjet;
