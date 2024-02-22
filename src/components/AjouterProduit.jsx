import React, { useState,useEffect} from 'react';
import axios from 'axios';
import Select from "react-dropdown-select";
const AjouterProduit = () => {
    const [ID, setID] = useState('');
    const [CodeABarre, setCodeABarre] = useState('');
    const [NomProduit, setNomProduit] = useState('');
    const [Ingredients, setIngredient] = useState();
    const [Prix, setPrix] = useState('');
    const [Allérgenes, setAllérgenes] = useState([]);
    const [ListeAllérgies, setListeAllérgies] = useState([]);
    const [AllergiesSelectionnees, setAllergiesSelectionnees] = useState([]); // Nouvelle variable pour stocker les allergies sélectionnées

    const AjouterProduit = async (e) => {
      e.preventDefault();
      try {
         const idExistant = await axios.get(`http://localhost:4001/Produit/VerifierID/${ID}`);
        if (idExistant.data) {
            // Si l'ID est déjà utilisé, afficher une alerte
            alert("L'ID est déjà utilisé par un autre produit.");
            return;
        }
          const response = await axios.post('http://localhost:4001/Produit/AjouterProduit', {
              ID: ID,
              CodeABarre: CodeABarre,
              NomProduit: NomProduit,
              Ingredients: Ingredients,
              Prix: Prix,
              Allérgenes: AllergiesSelectionnees // Utiliser les allergies sélectionnées au lieu de ListeAllérgies
          });
          console.log('Produit ajouté :', response);
          alert('Produit ajouté avec succés !')
          // Réinitialiser les champs après l'ajout
          setID('');
          setCodeABarre('');
          setNomProduit('');
          setIngredient('');
          setPrix('');
          setAllérgenes('');
          setAllergiesSelectionnees([]); // Réinitialiser les allergies sélectionnées
      } catch (error) {
          console.error('Erreur lors de l\'ajout du produit :', error);
      }
  };

    useEffect(() => {
      // Extraire la liste des noms d'allérgies
      axios.get('http://localhost:4001/Allergie/NomAllergies')
          .then(response => {
              // Extraire les allérgies de response et sauvegarder dans le tableau ListeAllérgies 
              const allergens = response.data.map(item => ({ label: item.NomAllergie, value: item.NomAllergie }));
              setListeAllérgies(allergens);
          })
          .catch(error => {
              console.error('Error fetching allergens:', error);
          });
  }, []);

 


    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Ajouter Produit</h1>
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
           <a href={`https://fr.openfoodfacts.org/cgi/search.pl?search_terms=${NomProduit}&search_simple=1&action=process`} target="_blank" rel="noopener noreferrer" className="Lien">
    <div className="Lien">
        Voir OpenFoodFacts
    </div>
</a>

              <textarea id="Ingredient" required="" value={Ingredients} onChange={(e) => setIngredient(e.target.value)} />
            </div>
            <div>
              <label htmlFor="Prix">Prix :</label>
              <input type="text" required="" id="Prix" value={Prix} onChange={(e) => setPrix(e.target.value)} />
            </div>
            <div>
              
              <label htmlFor="allergene">Allergène :</label>
              <a href="/AjouterAllergie" target="_blank" rel="noopener noreferrer" className="Lien">
                <div className="Lien">
             Ajouter une allergie</div>
               </a>
               <Select
                                className='ListeAllérgies'
                                name="SelectAllergies"
                                options={ListeAllérgies}
                                multi
                                color='#0b3257'
                                searchable={true}
                                onChange={(selectedOptions) => setAllergiesSelectionnees(selectedOptions)}
                >
               
              </Select>
            </div>
            <button style={{ fontSize: '25px' }} onClick={AjouterProduit}>Ajouter <i className="fa-solid fa-plus"></i></button>
          </form>
        </div>
      </div>
      </div>
    );
};

export default AjouterProduit;
