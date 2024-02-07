import React from 'react';
import {Link} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import { BsSearch} from 'react-icons/bs'

const SuperAdminProduits = () => {
  return (
    
    <div className='main-container'> 
   


      <h1 className='titre'>Liste des Produits </h1> 
      <div className='header-left' style={{ display: 'flex', alignItems: 'center' }}>
  <input type="text" placeholder="Rechercher Produit" className="search-input" />
  <button class="fa-solid fa-magnifying-glass" style={{position:'inherit',fontSize:'19px',width:'19%'}}></button>
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
            <tr>
              <td>1</td>
              <td>Jus tropico</td>
              <td className='Ingrédient'>Eau, sucre, jus de fruits (orange, ananas, pomme, pêche, passion) 20%, acide citrique (E330), conservateur (E202), arômes naturels, colorants</td>
              <td>2,0</td>
              <td>Aucun</td>
              <td><Link to="/ModifierProduit">
    <i className='fa-solid fa-gear'></i>
  </Link></td>
              <td><i className="fas fa-trash-alt"></i></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Coca-cola</td>
              <td className='Ingrédient'>Eau gazéifiée ; sucre ; colorant : caramel (E 150d) ; acidifiant : acide phosphorique ; arômes naturels (extraits végétaux), dont caféine</td>
              <td>2,0</td>
              <td>Aucun</td>
              <td><Link to="/ModifierProduit">
    <i className='fa-solid fa-gear'></i>
  </Link></td>
              <td><i className="fas fa-trash-alt"></i></td>
            </tr>
              <tr>
              <td>3</td>
              <td>Chocotom</td>
              <td className='Ingrédient'>farine de blé, sucre, graisse végétale palme, poudre de cacao, amidon de maïs, agents levants: carbonate acide d'ammonium, carbonate acide de sodium, diphophate disodique, émulsifiant: lécithine de soja, sel, correcteur d'acidité: acide citrique, arômes naturels noisette et chocolat</td>
              <td>2,0</td>
              <td>Gluténe</td>

              <td><Link to="/ModifierProduit">
    <i className='fa-solid fa-gear'></i>
  </Link></td>
              <td><i className="fas fa-trash-alt"></i></td>
            </tr>
          </tbody>
        </table>
        </div>
       
        <Link to="/AjouterProduit">  <button className="add" ><div class="sign">+</div>
  <div class="text">Ajouter produit</div></button> </Link>
    </div>
    
  );
};

export default SuperAdminProduits;
