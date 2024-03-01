import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import axios from 'axios';

const ListeAllergies = () => {
  const [Allergies, setAllergies] = useState([]);
  const [NomAllergie, setNomAllergie] = useState('');
  const[IngredientAllergeneenes,setIngredientAllergeneenes]=useState('')
  const [resultats, setResultats] = useState([]);
  const supprimerAllergie = async (ID) => {
    try {
      await axios.delete(`http://localhost:4001/Allergie/DeleteAllergie/${ID}`);
      // Mettre à jour la liste des Allergies après la suppression
      const updatedAllergies = Allergies.filter(Allergie => Allergie.ID !== ID);
      setAllergies(updatedAllergies);
    } catch (error) {
      console.error('Erreur lors de la suppression du Allergie :', error);
    }
  };
  useEffect(() => {
    axios.get('http://localhost:4001/Allergie/GetAllAllergies')
      .then(response => {
        setAllergies(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des Allergies :', error);
      });
  }, []);

  const handleChange = async (e) => {
    const { value } = e.target;
    setNomAllergie(value);

    // Vérifier si le champ de recherche est vide
    if (value === '') {
        // Si le champ est vide, afficher tous les Allergies
        setResultats(Allergies);
    } else {
        try {
            // Sinon, effectuer la recherche comme d'habitude
            const response = await axios.get(`http://localhost:4001/Allergie/GetAllergieByNom/${value}`);
            setResultats(response.data);
        } catch (error) {
            console.error('Erreur lors de la recherche du Allergie :', error);
        }
    }
};

  return (
    <div className='main-container'>
      <h1 className='titre'>Liste des Allergies</h1>
      <div className='header-left' style={{ display: 'flex', alignItems: 'center' }}>
        <input type="text" placeholder="Rechercher Allergie par nom" className="search-input" value={NomAllergie} onChange={handleChange} />
      </div>

      <div className='table-container'>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom Allergie</th>
              <th>Ingrédient allérgenes</th>
              <th>Modifier</th>
              <th>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {resultats.length > 0 ? (
              resultats.map(Allergie => (
                <tr key={Allergie.ID}>
                  <td>{Allergie.ID}</td>
                  <td>{Allergie.NomAllergie}</td>
                  <td>{Allergie.IngredientAllergeneenes}</td>
                  <td>
                    <Link to={`/ModifierAllergie/${Allergie.ID}`}>
                      <i className='fa-solid fa-gear'></i>
                    </Link>
                  </td>
                  <td>
                    <i className="fas fa-trash-alt"></i>
                  </td>
                </tr>
              ))
            ) : (
              Allergies.map(Allergie => (
                <tr key={Allergie.ID}>
                  <td>{Allergie.ID}</td>
                  <td>{Allergie.NomAllergie}</td>
                  <td>{Allergie.IngredientAllergeneenes}</td>
                  <td>
                    <Link to={`/ModifierAllergie/${Allergie.ID}`}>
                      <i className='fa-solid fa-gear'></i>
                    </Link>
                  </td>
                  <td>
                    <i className="fas fa-trash-alt" onClick={() => supprimerAllergie(Allergie.ID)}></i>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Link to="/AjouterAllergie">
        <button className="add">
          <div class="sign">+</div>
          <div class="text">Ajouter Allergie</div>
        </button>
      </Link>
    </div>
  );
};

export default ListeAllergies;
