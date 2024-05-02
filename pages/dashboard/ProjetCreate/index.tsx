import React, { useState , useEffect } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
    const ManageProjet = () => {

      const [modalMessage, setModalMessage] = useState("");
      const [open, setOpen] = useState(false);
      const onOpenModal = () => setOpen(true);
      const onCloseModal = () => setOpen(false);

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
      
        const handleChange = (e: { target: { name: any; value: any; }; }) => {
          const { name, value } = e.target;
          let updatedValue = value;

          if (name === 'techno') {
            if (typeof value === 'string') {
              updatedValue = value.split(',').map(item => item.trim());
            }
          // The value of the "techno" field is retrieved and then placed into an array.
          }
        
          setFormData(prevState => ({
            ...prevState,
            [name]: updatedValue
          }));
        };
        
      
        const handleSubmit = async (e: { preventDefault: () => void; }) => {
          e.preventDefault();
          try {
            console.log("Form data:", formData);

            const response = await fetch('https://portefoliov3-beta.vercel.app/api/projet_add', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });
            if (response.ok) {
              setModalMessage("Projet créer avec succès");
              console.log("Object added successfully");
            } else {
              setModalMessage("Echec de création du projet");
              console.error("Failed to add object:", response.statusText);
          }
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
          setOpen(true);

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
      <img src="https://res.cloudinary.com/df1z0o9nt/image/upload/s--NZ-_7Whm--/f_webp/q_auto:good/Projet_Openclassroom/papillon-fleurs_ysyssc.jpg" alt="royalty-free image" className="w-full object-cover min-[320px]:h-full " loading="lazy"  />
      <form className='flex flex-col justify-around items-center bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 absolute w-[37%] h-[70%] min-[320px]:w-auto  max-[970px]:top-[25%]' onSubmit={handleSubmit}>
      <h1>Add New Project</h1>
        <label className='flex justify-between'>
         <h2>Name:</h2> 
          <input className='backdrop-blur-sm' type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
 
        <label  className='flex justify-between'>
            <h2>ID:</h2>
              <input type="number" name="id" value={formData.id} onChange={handleChange} disabled />
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
      <div>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2" type="submit">Add Project</button>
        <Modal open={open} onClose={onCloseModal} center>
          <h2 className="text-black p-[30px]">{modalMessage}</h2>
        </Modal>
      </div>
      </form>
    </div>
  );
};

export default ManageProjet;
