import React, { useState } from 'react';
import axios from 'axios';
import Select from "react-dropdown-select";
const AjouterAllergie = () => {
    const [ID, setID] = useState('');
    const [NomAllergie, setNomAllergie] = useState('');
    const [IngredientAllergeneenes, setIngredientAllergeneenes] = useState('');
   

    const AjouterAllergie = async (e) => {
      e.preventDefault();
      try {
         const idExistant = await axios.get(`http://localhost:4001/Allergie/VerifierID/${ID}`);
        if (idExistant.data) {
            // Si l'ID est déjà utilisé, afficher une alerte
            alert("L'ID est déjà utilisé par un autre Allergie.");
            return;
        }
          const response = await axios.post('http://localhost:4001/Allergie/AjouterAllergie', {
              ID: ID,
              NomAllergie: NomAllergie,
              IngredientAllergeneenes: IngredientAllergeneenes,
    
          });
          console.log('Allergie ajouté :', response);
          alert('Allergie ajouté avec succés !')
          // Réinitialiser les champs après l'ajout
          setID('');
          setNomAllergie('');
          setIngredientAllergeneenes('');
        
      } catch (error) {
          console.error('Erreur lors de l\'ajout du Allergie :', error);
      }
  };
  
  
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Ajouter Allergie</h1>
        <div className="form-container">

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form>
            <div>
              <label htmlFor="ID">ID :</label>
              <input type="text" required="" id="ID" value={ID} onChange={(e) => setID(e.target.value)} />
            </div>
            <div>
              <label htmlFor="NomAllergie">Nom du Allergie :</label> 
              <input type="text" required="" id="NomAllergie" value={NomAllergie} onChange={(e) => setNomAllergie(e.target.value)} />
            </div>
          
            <div>
              <label htmlFor="Prix">Ingrédient allérgenes :</label>
              <input type="text" required="" id="IngredientAllergeneenes" value={IngredientAllergeneenes} onChange={(e) => setIngredientAllergeneenes(e.target.value)} />
            </div>
          
            <button style={{ fontSize: '25px',height:55 }} onClick={AjouterAllergie}>Ajouter <i className="fa-solid fa-plus"></i></button>
          </form>
        </div>
      </div>
      </div>
    );
};

export default AjouterAllergie;
