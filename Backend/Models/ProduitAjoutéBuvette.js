const mongoose =require ('mongoose');

const ProduitAjoutéBuvette = mongoose.model('ProduitAjoutéBuvette',{
    NomProduit :{
        type:String
    },
    Prix :{
        type:String
    }
})
module.exports=ProduitAjoutéBuvette;