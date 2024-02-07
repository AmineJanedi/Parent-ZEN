import { Link } from "react-router-dom";
import React, { useState } from 'react';

const ModifierProduit = () => {
    const [id, setId] = useState('');
    const [nomProduit, setNomProduit] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [prix, setPrix] = useState('');
    const [CodeABarre, setCodeABarre] = useState('');
    const [allergene, setAllergene] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      // Logique pour Modifier le produit
      console.log("Produit Modifié :", { id, nomProduit, ingredients, prix, allergene });
      // Réinitialiser les champs après l'ajout
      setId('');
      setNomProduit('');
      setIngredients('');
      setPrix('');
      setCodeABarre('');
      setAllergene('');
    };

    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Modifier Produit</h1>
        <div className="form-container">

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="id">ID :</label>
              <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div>
              <label htmlFor="CodeABarre">CodeABarre :</label>
              <input type="number" id="CodeABarre" value={CodeABarre} onChange={(e) => setCodeABarre(e.target.value)} />
             
            </div>
            <div>
              <label htmlFor="nomProduit">Nom du produit :</label> 
              <input type="text" id="nomProduit" value={nomProduit} onChange={(e) => setNomProduit(e.target.value)} />
            </div>
            <div>
              <label htmlFor="ingredients">Ingrédients :</label>
              {/*Target blank pour que le lien s'ouvre que dans une nouvelle page et noopener Cela 
              protège contre les attaques de phishing où une nouvelle fenêtre pourrait être utilisée pour rediriger l'utilisateur
               vers une page malveillante tout en conservant la page d'origine ouverte en arrière-plan */} 
              <a href="https://fr.openfoodfacts.org/data" target="_blank" rel="noopener noreferrer" className="Lien">
                <div className="Lien">
              Voir OpenFoodFacts</div>
               </a>
              <textarea id="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
            </div>
            <div>
              <label htmlFor="prix">Prix :</label>
              <input type="text" id="prix" value={prix} onChange={(e) => setPrix(e.target.value)} />
            </div>
            <div>
              <label htmlFor="allergene">Allergène :</label>
              <select id="allergene" value={allergene} onChange={(e) => setAllergene(e.target.value)}>
                <option value="">Sélectionnez un allergène</option>
                <option value="Gluten">Gluten</option>
                <option value="Fraise">Fraise</option>
                <option value="Poisson">Poisson</option>
                <option value="Viande">Viande</option>
                <option value="Sésame">Sésame</option>
                <option value="Lait">Lait</option>
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
