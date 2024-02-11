import { Link } from "react-router-dom";
import React, { useState } from 'react';

const ModifierProduit = () => {
  const [ID, setID] = useState('');
  const [CodeABarre, setCodeABarre] = useState('');
  const [NomProduit, setNomProduit] = useState('');
  const [Ingredient, setIngredient] = useState('');
  const [Prix, setPrix] = useState('');
  const [Allérgenes, setAllérgenes] = useState('');

  const handleSubmit =  (e) => {
    e.preventDefault();
    try {
      const response = axios.post('http://localhost:4000//ModifierProduit/:ID', {
          ID:ID,
          CodeABarre:CodeABarre,
          NomProduit:NomProduit,
          Ingredient:Ingredient,
          Prix:Prix,
          Allérgenes:Allérgenes
      });
      console.log('Produit Modifié :', response.data);
      // Réinitialiser les champs après l'ajout
      setID('');
      setCodeABarre('');
      setNomProduit('');
      setIngredient('');
      setPrix('');
      setAllérgenes('');
  } catch (error) {
      console.error('Erreur lors de l\'ajout du produit :', error);
  }
 
  };
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Modifier Produit</h1>
        <div className="form-container">

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form>
            <div>
              <label htmlFor="ID">ID :</label>
              <input type="text" required="" id="ID" value={ID} onChange={(e) => setID(e.target.value)} />
            </div>
            <div>
              <label htmlFor="CodeABarre">CodeABarre :</label>
              <input type="number" required="" id="CodeABarre" value={CodeABarre} onChange={(e) => setCodeABarre(e.target.value)} />
             
            </div>
            <div>
              <label htmlFor="NomProduit">Nom du produit :</label> 
              <input type="text" required="" id="NomProduit" value={NomProduit} onChange={(e) => setNomProduit(e.target.value)} />
            </div>
            <div>
              <label htmlFor="Ingredient">Ingrédients :</label>
              {/*Target blank pour que le lien s'ouvre que dans une nouvelle page et noopener Cela 
              protège contre les attaques de phishing où une nouvelle fenêtre pourrait être utilisée pour rediriger l'utilisateur
               vers une page malveillante tout en conservant la page d'origine ouverte en arrière-plan */} 
              <a href="https://fr.openfoodfacts.org/data" target="_blank" rel="noopener noreferrer" className="Lien">
                <div className="Lien">
              Voir OpenFoodFacts</div>
               </a>
              <textarea id="Ingredient" required="" value={Ingredient} onChange={(e) => setIngredient(e.target.value)} />
            </div>
            <div>
              <label htmlFor="Prix">Prix :</label>
              <input type="text" required="" id="Prix" value={Prix} onChange={(e) => setPrix(e.target.value)} />
            </div>
            <div>
              
              <label htmlFor="allergene">Allergène :</label>
              <a href="/AjouterAllergies" target="_blank" rel="noopener noreferrer" className="Lien">
                <div className="Lien">
             Ajouter une allergie</div>
               </a>
              <select id="Allérgenes" value={Allérgenes} onChange={(e) => setAllérgenes(e.target.value)}>
                <option value="">Sélectionnez un allergène</option>
                <option value="Gluten">Gluten</option>
                <option value="Fraise">Fraise</option>
                <option value="Poisson">Poisson</option>
                <option value="Viande">Viande</option>
                <option value="Sésame">Sésame</option>
                <option value="Lait">Lait</option>
                <option value="Aucun">Aucun</option>
              </select>
            </div>
            <button style={{ fontSize: '25px' }} type="submit" onClick={''}>Modifier <i class="fa-solid fa-gear"></i></button>
          </form>
        </div>
      </div>
      </div>
    );
};

export default ModifierProduit;
