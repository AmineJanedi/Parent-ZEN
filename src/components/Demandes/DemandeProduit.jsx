import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import axios from 'axios';

const DemandeProduit = () => {
    const [produits, setProduits] = useState([]);
    const [NomProduit, setNomProduit] = useState('');

    useEffect(() => {
        axios.get('http://localhost:4001/ProduitAjouteBuvette/GetAllProduitAjoute')
            .then(response => {
                setProduits(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des produits :', error);
            });
    }, []);

  
    return (
        <div className='main-container'>
            <h1 className='titre'>Liste des demandes d'ajouter produit</h1>
           

            <div className='table-container'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Nom produit</th>
                            <th>Prix</th>
                            <th>Vérifier dans OpenFoodFacts</th>
                            <th>Approuver</th>
                            <th>Refuser</th>
                        </tr>
                    </thead>
                    <tbody>
                    {produits.map(produit => (
    <tr key={produit.NomProduit}>
        <td>{produit.NomProduit}</td>
        <td style={{width:"15%"}}>{produit.Prix} DT</td>
        <td><a href={`https://tn-en.openfoodfacts.org/cgi/search.pl?search_terms=${produit.NomProduit}&search_simple=1&action=process`} target="_blank" rel="noopener noreferrer" className="Lien" style={{marginRight:50,fontSize:22}}>vérifier {produit.NomProduit}</a></td>
        <td>
        <i className='fa-solid fa-circle-check' style={{fontSize:20,color:'green'}}></i> 
        </td>
        <td>
        <i className='fa-solid fa-circle-xmark'style={{fontSize:20,color:'red'}} ></i> 
        </td>
    </tr>
))}

                    </tbody>
                </table>
            </div>

            <Link to="/AjouterProduit" target="_blank">
                <button className="add">
                    <div class="sign">+</div>
                    <div class="text">Ajouter produit</div>
                </button>
            </Link>
        </div>
    );
};

export default DemandeProduit;
