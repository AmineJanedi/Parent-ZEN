const express=require('express');
const router=express.Router();
const Produits=require('../Models/Produits');


//Ajouter Produit Avec une autre facon 'Await'***********************************************************************
router.post('/AjouterProduit', async (req, res) => {
    try {
        // Vérifier si l'ID est déjà utilisé
        const existingProduit = await Produits.findOne({ ID: req.body.ID });
        if (existingProduit) {
            return res.status(400).json({ message: "L'ID est déjà utilisé par un autre produit." });
        }

        // Créer un nouveau produit s'il n'y a pas de conflit d'ID
        const savedProduit = await Produits.create(req.body);
        res.status(200).json(savedProduit);
        let nombreProduits =await Produits.updateOne({}, { $inc: { NbProduit: 1 } });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Une erreur s'est produite lors de l'ajout du produit." });
    }
});

//getNombre produits*************************************************************************************************
router.get('/nombreProduits', async (req, res) => {
    try {
        // Récupérer le nombre total de produits depuis la base de données
        const produitsCount = await Produits.countDocuments();
        res.status(200).json({ nombreProduits: produitsCount });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération du nombre total de produits." });
    }
});

//Afficher tout les Produits *********************************************************************
router.get('/GetAllProduits',(req,res)=>{
Produits.find()
.then (
(Produits)=>{
    res.status(200).send(Produits);
}
)
.catch (
    (err)=>{
    res.status(400).send(err)
})
})
//Chercher Produit Par Nom*********************************************************************
router.get('/GetProduitByNom/:NomProduit', (req, res) => {
    ProduitNom = req.params.NomProduit;
    Produits.find({ NomProduit: ProduitNom })
        .then((produits) => {
            res.status(200).send(produits);
        })
        .catch (
            (err)=>{
            res.status(404).send(err)
            
        });
});
//Chercher Produit Par ID***************************************************************************
router.get('/GetProduitByID/:ID', (req, res) => {
    const produitID = req.params.ID;
    Produits.findOne({ ID: produitID })
        .then((produit) => {
            res.status(200).send(produit);
        })
        .catch (
            (err)=>{
            res.status(400).send(err)
        });
});

//Modifier Produit *********************************************************************
router.put('/ModifierProduit/:ID', (req, res) => {
    const produitID = req.params.ID;
    const newProduit = req.body;
    Produits.findOneAndUpdate({ ID: produitID }, newProduit, { new: true })
        .then((updatedProduit) => {
            if (updatedProduit) {
                res.send(updatedProduit);
            } else {
                res.status(404).send("Aucun produit trouvé avec cet ID.");
            }
        })
        .catch (
            (err)=>{
            res.status(400).send(err)
        });
});

//Effacer Produit *********************************************************************
router.delete('/DeleteProduit/:ID', (req, res) => {
    const idp = req.params.ID;
    Produits.findOneAndDelete({ ID: idp })
        .then((deletedProduit) => {
            if (deletedProduit) {
                res.status(200).send(deletedProduit);
                let nombreProduits = Produits.updateOne({}, { $inc: { NbProduit: -1 } });

            } else {
                res.status(404).send("Aucun produit trouvé avec cet ID.");
            }
        })
        .catch (
            (err)=>{
            res.status(400).send(err)
        });
});
//DetailProduit***************************************************************************************
router.get('/DetailsProduit/:ID', (req, res) => {
    const produitID = req.params.ID;
    Produits.findOne({ ID: produitID })
        .then((produit) => {
            if (produit) {
                res.send(produit);
            } else {
                res.status(404).send("Aucun produit trouvé avec cet ID.");
            }
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});
//Vérifier ID produit********************************************************************************************
router.get('/VerifierID/:ID', (req, res) => {
    const produitID = req.params.ID;
    // Recherchez dans la base de données si un produit avec cet ID existe déjà
    Produits.findOne({ ID: produitID })
        .then((produit) => {
            if (produit) {
                // Si un produit avec cet ID existe déjà, renvoyez true
                res.json(true);
            } else {
                // Si aucun produit avec cet ID n'existe, renvoyez false
                res.json(false);
            }
        })
        .catch((err) => {
            // En cas d'erreur, renvoyez un code d'erreur
            console.error('Erreur lors de la vérification de l\'ID du produit :', err);
            res.status(500).send('Une erreur s\'est produite lors de la vérification de l\'ID du produit.');
            res.status(404).send('Entrer ID');

        });
});

module.exports=router;