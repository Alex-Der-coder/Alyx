import React, { useState , useEffect } from 'react';


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

        const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://portefoliov3-beta.vercel.app/api/projet');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setData(result);
        console.log(result);
        setFormData(prevState => ({ ...prevState, id: result.length + 1 }));
      } catch (error) {
      }
    };

    fetchData();
  }, []); 


  return (
    <div className='w-full h-full flex justify-center content-center items-center'>
      <img src="https://res.cloudinary.com/df1z0o9nt/image/upload/s--NZ-_7Whm--/f_webp/q_auto:good/Projet_Openclassroom/papillon-fleurs_ysyssc.jpg" alt=""className="w-full object-cover max-h-[90%]" loading="lazy" fetchpriority="low" />
      <form className='flex flex-col justify-between h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 absolute w-[37%] h-[70%]' onSubmit={handleSubmit}>
      <h1>Add New Project</h1>
        <label className='flex justify-between'>
         <h2>Name:</h2> 
          <input className='backdrop-blur-sm' type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
 
        <label  className='flex justify-between'>
            <h2>ID:</h2>
              <input type="number" name="id" value={formData.id} onChange={handleChange} />
        </label>

        <label  className='flex justify-between'>
          <h2>Cover Image URL:</h2> 
            <input type="text" name="cover" value={formData.cover} onChange={handleChange} />
        </label>

        <label  className='flex justify-between'>
          <h2>Description:</h2>
            <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>

        <label  className='flex justify-between'>
         <h2>Technologies : </h2>
          <input type="text" name="techno" value={formData.techno} onChange={handleChange} />
        </label>

        <label  className='flex justify-between'>
         <h2>Link:</h2>
            <input type="text" name="link" value={formData.link} onChange={handleChange} />
        </label>

        <label  className='flex justify-between'>
         <h2>Repository URL:</h2>
          <input type="text" name="repos" value={formData.repos} onChange={handleChange} />
        </label>

        <label  className='flex justify-between'>
          <h2>Context: </h2> 
            <textarea name="contexte" value={formData.contexte} onChange={handleChange} />
        </label>

        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default ManageProjet;
