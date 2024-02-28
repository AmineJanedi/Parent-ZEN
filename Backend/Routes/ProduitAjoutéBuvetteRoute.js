const express=require('express');
const router=express.Router();
const ProduitAjoutéBuvette=require('../Models/ProduitAjoutéBuvette');
//Get all Produit***********************************************************************************************
router.get('/GetAllProduitAjoute', (req, res) => {
    ProduitAjoutéBuvette.find()
        .then((produits) => {
            res.status(200).send(produits); // Change ProduitAjoutéBuvette to produits
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

    module.exports=router;