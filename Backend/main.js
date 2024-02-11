const express = require('express');
require ('./Config/Connect')
const session =require('express-session');
const app =express();
const PORT= 4000;
app.use(express.json());
const ProduitRoute=require('./Routes/ProduitRoute')

//http://127.1.0.1:4000/Produit/AjouterProduit par exemple
app.use('/Produit',ProduitRoute)

//Configuration de PORT*********************************************************************
app.listen(PORT,() =>{
    console.log('server started at http://localhost:4000');
});
 