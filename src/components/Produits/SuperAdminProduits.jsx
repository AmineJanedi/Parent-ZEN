import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import axios from 'axios';

const SuperAdminProduits = () => {
    const [produits, setProduits] = useState([]);
    const [NomProduit, setNomProduit] = useState('');
    const [resultats, setResultats] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4001/Produit/GetAllProduits')
            .then(response => {
                setProduits(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des produits :', error);
            });
    }, []);

    const supprimerProduit = async (ID) => {
        try {
            await axios.delete(`http://localhost:4001/Produit/DeleteProduit/${ID}`);
            // Mettre à jour la liste des produits après la suppression
            const updatedProduits = produits.filter(produit => produit.ID !== ID);
            setProduits(updatedProduits);
        } catch (error) {
            console.error('Erreur lors de la suppression du produit :', error);
        }
    };

  
    const handleChange = async (e) => {
        const { value } = e.target;
        setNomProduit(value);
    
        // Vérifier si le champ de recherche est vide
        if (value === '') {
            // Si le champ est vide, afficher tous les produits
            setResultats(produits);
        } else {
            try {
                // Sinon, effectuer la recherche comme d'habitude
                const response = await axios.get(`http://localhost:4001/Produit/GetProduitByNom/${value}`);
                setResultats(response.data);
            } catch (error) {
                console.error('Erreur lors de la recherche du Produit :', error);
            }
        }
    };
    
    
    return (
        <div className='main-container'>
        <h1 className='titre'>Liste des Produits</h1>
        <div className='header-left' style={{ display: 'flex', alignItems: 'center' }}>
            <input type="text" placeholder="Rechercher Produit par nom" className="search-input" value={NomProduit} onChange={handleChange} />
        </div>

        <div className='table-container'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom produit</th>
                        <th className='Ingrédient'>Ingrédient</th>
                        <th>Prix</th>
                        <th>Allérgies</th>
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
                                <td style={{width:"15%"}}>{produit.Prix} DT</td>
                                <td>
                                    <ul>
                                        {produit.Allérgenes.map((allergen, index) => (
                                            <li key={index}>{allergen.value}</li>
                                        ))}
                                    </ul>
                                </td>
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
                    ) : (
                        produits.map(produit => (
                            <tr key={produit.ID}>
                                <td>{produit.ID}</td>
                                <td>{produit.NomProduit}</td>
                                <td className='Ingrédient'>{produit.Ingredients}</td>
                                <td style={{width:"15%"}}>{produit.Prix} DT</td>
                                <td>
                                    <ul>
                                        {produit.Allérgenes.map((allergen, index) => (
                                            <li key={index}>{allergen.value}</li>
                                        ))}
                                    </ul>
                                </td>
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
