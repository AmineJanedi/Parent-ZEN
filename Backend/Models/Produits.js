const mongoose =require ('mongoose');

const Produits = mongoose.model('Produits',{
    ID :{
        type:String
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
        type:Number
    },
    Allérgenes :{
        type:Array
    }
})
module.exports=Produits;