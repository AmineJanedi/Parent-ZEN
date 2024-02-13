import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import axios from 'axios';

const SuperAdminProduits = () => {
  const [produits, setProduits] = useState([]);
  const [NomProduit, setNomProduit] = useState('');
  const [resultats, setResultats] = useState([]);
  const supprimerProduit = async (ID) => {
    try {
      await axios.delete(`http://localhost:4000/Produit/DeleteProduit/${ID}`);
      // Mettre à jour la liste des produits après la suppression
      const updatedProduits = produits.filter(produit => produit.ID !== ID);
      setProduits(updatedProduits);
    } catch (error) {
      console.error('Erreur lors de la suppression du produit :', error);
    }
  };
  useEffect(() => {
    axios.get('http://localhost:4000/Produit/GetAllProduits')
      .then(response => {
        setProduits(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des produits :', error);
      });
  }, []);

  const handleRecherche = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/Produit/GetProduitByNom/${NomProduit}`);
      if (response.data.length === 0) {
        alert('Produit introuvable.');
      } else {
        setResultats(response.data);
      }
    } catch (error) {
      alert('Insérer le nom de produit !');
      console.error('Erreur lors de la recherche du produit :', error);
    }
};

  return (
    <div className='main-container'>
      <h1 className='titre'>Liste des Produits</h1>
      <div className='header-left' style={{ display: 'flex', alignItems: 'center' }}>
        <input type="text" placeholder="Rechercher Produit par nom" className="search-input" value={NomProduit} onChange={(e) => setNomProduit(e.target.value)} />
        <button className="fa-solid fa-magnifying-glass" style={{ position: 'inherit', fontSize: '19px', width: '19%' }} onClick={handleRecherche}></button>
      </div>

      <div className='table-container'>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom produit</th>
              <th className='Ingrédient'>Ingrédient</th>
              <th>Prix</th>
              <th>Allérgie</th>
              <th>Modifier</th>
              <th>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {resultats.length > 0 ? (
              resultats.map(produit => (
                <tr key={produit.ID}>
                  <td>{produit.ID}</td>
                  <td>{produit.NomProduit}</td>
                  <td className='Ingrédient'>{produit.Ingredients}</td>
                  <td>{produit.Prix}</td>
                  <td>{produit.Allérgenes}</td>
                  <td>
                    <Link to={`/ModifierProduit/${produit.ID}`}>
                      <i className='fa-solid fa-gear'></i>
                    </Link>
                  </td>
                  <td>
                    <i className="fas fa-trash-alt"></i>
                  </td>
                </tr>
              ))
            ) : (
              produits.map(produit => (
                <tr key={produit.ID}>
                  <td>{produit.ID}</td>
                  <td>{produit.NomProduit}</td>
                  <td className='Ingrédient'>{produit.Ingredients}</td>
                  <td>{produit.Prix}</td>
                  <td>{produit.Allérgenes}</td>
                  <td>
                    <Link to={`/ModifierProduit/${produit.ID}`}>
                      <i className='fa-solid fa-gear'></i>
                    </Link>
                  </td>
                  <td>
                    <i className="fas fa-trash-alt" onClick={() => supprimerProduit(produit.ID)}></i>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Link to="/AjouterProduit">
        <button className="add">
          <div class="sign">+</div>
          <div class="text">Ajouter produit</div>
        </button>
      </Link>
    </div>
  );
};

export default SuperAdminProduits;
