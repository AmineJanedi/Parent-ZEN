import React, { useState,useEffect} from 'react';
import axios from 'axios';
import { useParams, } from 'react-router-dom';

const ModifierAllergie = () => {
    const [NomAllergie, setNomAllergie] = useState('');
    const [IngredientAllergeneenes, setIngredientAllergeneenes] = useState('');
    const [Allergie, setAllergie] = useState({
      NomAllergie: '',
      IngredientAllergeneenes: '',
  });

  const { ID } = useParams(); // Extraire l'ID de l'URL
  useEffect(() => {
    axios.get(`http://localhost:4001/Produit/DetailsProduit/${ID}`)
        .then(response => {
            setProduit(response.data);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération du produit :', error);
        });
}, [ID]);
    const ModifierAllergie =async (e) => {
      e.preventDefault();
      try {
        const response = await axios.put(`http://localhost:4001/Allergie/ModifierAllergie/${ID}`, {
            ID:ID,
            NomAllergie:NomAllergie,
            IngredientAllergeneenes:IngredientAllergeneenes

        }
        );
        console.log('Allergie modifié :', response);
        alert('Allergie Modifié avec succés !')
        // Réinitialiser les champs après l'ajout
        setID('');
        setNomAllergie('');
        setIngredientAllergeneenes('')
        
    } catch (error) {
        console.error('Erreur lors de modification du Allergie :', error);
    }
   
    };
  
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Modifier Allergie</h1>
        <div className="form-container">

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form>
            <div>
              <label htmlFor="ID">ID :</label>
              <input type="text" required="" id="ID" value={ID} readOnly />
            </div>
            <div>
              <label htmlFor="NomAllergie">Nom du Allergie :</label> 
              <input type="text" required="" id="NomAllergie" value={NomAllergie} onChange={(e) => setNomAllergie(e.target.value)} />
            </div>
          
            <div>
              <label htmlFor="Prix">Ingrédient allérgenes :</label>
              <input type="text" required="" id="IngredientAllergeneenes" value={IngredientAllergeneenes} onChange={(e) => setIngredientAllergeneenes(e.target.value)} />
            </div>
          
            <button style={{ fontSize: '25px' }} onClick={ModifierAllergie}>Modifier <i className="fa-solid fa-plus"></i></button>
          </form>
        </div>
      </div>
      </div>
    );
};

export default ModifierAllergie;
