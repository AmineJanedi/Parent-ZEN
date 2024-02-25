const mongoose =require ('mongoose');

const Produits = mongoose.model('Produits',{
    ID :{
        type:Number
    },
    CodeABarre :{
        type:Number
    },
    NomProduit :{
        type:String
    },
    Ingredients :{
        type:String
    },
    Prix :{
        type:String
    },
    Allérgenes :{
        type:Array
    },
   
})
module.exports=Produits;