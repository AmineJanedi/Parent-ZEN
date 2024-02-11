const express=require('express');
const router=express.Router();
const Produits=require('../Models/Produits');
//Ajouter Produit *********************************************************************
router.post('/AjouterProduit',(req,res)=>{
    data=req.body;
    Prod=new Produits(data);
    Prod.save()
    .then(
        (savedProduit)=>{
            res.status(200).send(savedProduit)
        }
    )
    .catch ( 
        (err)=>{
            res.status(400).send(err)
        }
    )
})
//Ajouter Produit Avec une autre facon 'Await'***********************************************************************
router.post('/AjouterProduit2',async (req,res)=>{
    try {
        data=req.body;
        Prod=new Produits(data);
        savedProduit=await Prod.save();
        res.status(200).send(savedProduit)

    } catch {
        (err)=>{
        res.status(400).send(err)
    }}
})
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
            res.status(400).send(err)
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
            } else {
                res.status(404).send("Aucun produit trouvé avec cet ID.");
            }
        })
        .catch (
            (err)=>{
            res.status(400).send(err)
        });
});

module.exports=router;