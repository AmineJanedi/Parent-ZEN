const express=require('express');
const router=express.Router();
const Allergies=require('../Models/Allergies');
let nombreAllergies = 0; // Nombre initial de Allergies

//Ajouter Allergie Avec une autre facon 'Await'***********************************************************************
router.post('/AjouterAllergie',async (req,res)=>{
    console.log(req.body)
    try {
        const savedAllergie = await Allergies.create(req.body)
        res.status(200).json(savedAllergie)
    } catch(err) {
        console.log(err);
    }
})
//getNombre Allergies*************************************************************************************************
router.get('/nombreAllergies', (req, res) => {
    res.status(200).json({ nombreAllergies });
});
//Afficher tout les Allergies *********************************************************************
router.get('/GetAllAllergies',(req,res)=>{
Allergies.find()
.then (
(Allergies)=>{
    res.status(200).send(Allergies);
}
)
.catch (
    (err)=>{
    res.status(400).send(err)
})
})
//Chercher Allergie Par Nom*********************************************************************
router.get('/GetAllergieByNom/:NomAllergie', (req, res) => {
    AllergieNom = req.params.NomAllergie;
    Allergies.find({ NomAllergie: AllergieNom })
        .then((Allergies) => {
            res.status(200).send(Allergies);
        })
        .catch (
            (err)=>{
            res.status(404).send(err)
            
        });
});
//Chercher Allergie Par ID***************************************************************************
router.get('/GetAllergieByID/:ID', (req, res) => {
    const AllergieID = req.params.ID;
    Allergies.findOne({ ID: AllergieID })
        .then((Allergie) => {
            res.status(200).send(Allergie);
        })
        .catch (
            (err)=>{
            res.status(400).send(err)
        });
});

//Modifier Allergie *********************************************************************
router.put('/ModifierAllergie/:ID', (req, res) => {
    const AllergieID = req.params.ID;
    const newAllergie = req.body;
    Allergies.findOneAndUpdate({ ID: AllergieID }, newAllergie, { new: true })
        .then((updatedAllergie) => {
            if (updatedAllergie) {
                res.send(updatedAllergie);
            } else {
                res.status(404).send("Aucun Allergie trouvé avec cet ID.");
            }
        })
        .catch (
            (err)=>{
            res.status(400).send(err)
        });
});

//Effacer Allergie *********************************************************************
router.delete('/DeleteAllergie/:ID', (req, res) => {
    const idp = req.params.ID;
    Allergies.findOneAndDelete({ ID: idp })
        .then((deletedAllergie) => {
            if (deletedAllergie) {
                res.status(200).send(deletedAllergie);
            } else {
                res.status(404).send("Aucun Allergie trouvé avec cet ID.");
            }
        })
        .catch (
            (err)=>{
            res.status(400).send(err)
        });
});
//Extraire tous les nom d'allergies****************************************************************************
router.get('/NomAllergies', async (req, res) => {
    try {
        // Fetch all records from the Allergies collection
        const allergies = await Allergies.find({}, 'NomAllergie');
        
        // Transform fetched data into the desired format
        const listeAllergies = allergies.map(allergie => ({ NomAllergie: allergie.NomAllergie }));
        
        // Send the formatted data as a response
        res.json(listeAllergies);
    } catch (error) {
        // If an error occurs, send an error response
        console.error('Error fetching NomAllergie:', error);
        res.status(500).json({ error: 'Error fetching NomAllergie' });
    }
});


module.exports=router;