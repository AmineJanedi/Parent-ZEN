const mongoose =require ('mongoose');

const Allergies = mongoose.model('Allergies',{
    ID :{
        type:String
    },
    NomAllergie :{
        type:String
    },
    IngredientAllergeneenes :{
        type:String
    }
})
module.exports=Allergies;