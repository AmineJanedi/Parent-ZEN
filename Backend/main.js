const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
require('./Config/Connect')
const app = express();
const PORT = 4000;
const ProduitRoute = require('./Routes/ProduitRoute')

app.use(cors())
app.use(express.json());
app.use(morgan('dev'))
//http://127.1.0.1:4000/Produit/AjouterProduit par exemple

app.use('/Produit', ProduitRoute)


//Configuration de PORT*********************************************************************
app.listen(PORT, () => {
    console.log('server started at http://localhost:4000');
});