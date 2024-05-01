
import React from "react"
import { useState} from 'react'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

export default function Dashboard() {

    const [modalMessage, setModalMessage] = useState("");
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    
    const handleConfirmationChange = (e: { target: { checked: any; }; }) => {
        const { checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            confirmation: checked,
        }));
    };


    const [formData, setFormData] = useState({ id: '', confirmation: false });

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
        const response = await fetch('https://portefoliov3-beta.vercel.app/api/project_delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            setModalMessage("Projet supprimé avec succès");
        } else {
            setModalMessage("Projet non trouvé");
        }
        setOpen(true);

        const data = await response.json();
        console.log(data);
        // Réinitialisation du formulaire après la soumission réussie 
        setFormData((prevData) => ({
    id: '',
    confirmation: prevData.confirmation, // Conserver la valeur actuelle de confirmation
}));

    } catch (error) {
        console.error('Error updating project:', error);
        // Gérer les erreurs
    }
};

return (
    <div className='w-full h-full flex justify-center content-center items-center'>
        <img src="https://res.cloudinary.com/df1z0o9nt/image/upload/s--NZ-_7Whm--/f_webp/q_auto:good/Projet_Openclassroom/papillon-fleurs_ysyssc.jpg" alt="" className="w-full object-cover min-[320px]:h-full" loading="lazy" />
        <form className='flex flex-col justify-around items-center bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 absolute w-[22%] h-[50%] min-[320px]:w-auto  max-[970px]:top-[25%]' onSubmit={handleSubmit}>
            <h1 className="text-center">Tool for remove project form Portefolio</h1>
            <label htmlFor="projectId"><h2>ID du Projet:</h2></label>
            <input type="text" id="projectId" placeholder="value in number" name="id" value={formData.id} onChange={handleChange} required /><br />

            <div className="flex items-center justify-center w-[90%]">
                <input type="checkbox" id="confirmationCheckbox"  name="confirmation" checked={formData.confirmation} onChange={handleConfirmationChange} className="hidden" />
                <label aria-label="Confirmation checkbox" htmlFor="confirmationCheckbox" className={`inline-flex items-center justify-center w-9 h-9 rounded-md border border-gray-300 cursor-pointer focus:outline-none ${formData.confirmation ? 'bg-emerald-950' : 'bg-rose-950'}`}>
                    {formData.confirmation && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M0 11l2-2 5 5L18 3l2 2L7 18z" clipRule="evenodd" />
                        </svg>
                    )}
                </label>
                <span className="ml-2 ">Je confirme la suppression du projet</span>
            </div>
            <div>
            <button
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 disabled:opacity-50 ${!formData.confirmation && 'disabled:opacity-50 bg-gray-300 '} ${formData.confirmation && 'bg-primary text-primary-foreground shadow hover:bg-primary/90'}`}
                type="submit"
                disabled={!formData.confirmation}
            >
                Supprimer le projet
            </button>
            <Modal open={open} onClose={onCloseModal} center>
        <h2 className="text-black p-[30px]">{modalMessage}</h2>
            </Modal>
            </div>
        </form>
    </div>
);
};

