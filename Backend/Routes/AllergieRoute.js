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
               let nombreAllergies =await Allergies.updateOne({}, { $inc: { NbAllergie: 1 } });

    } catch(err) {
        console.log(err);
    }
})
//getNombre Allergies*************************************************************************************************
router.get('/nombreAllergies', async (req, res) => {
    try {
        // Récupérer le nombre total de Allergies depuis la base de données
        const AllergiesCount = await Allergies.countDocuments();
        res.status(200).json({ nombreAllergies: AllergiesCount });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Une erreur s'est Allergiee lors de la récupération du nombre total de Allergies." });
    }
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
                let nombreAllergies = Allergies.updateOne({}, { $inc: { NbAllergie: -1 } });

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
//Detail Allergie*********************************************************************************************************
router.get('/DetailsAllergie/:ID', (req, res) => {
    const AllergieID = req.params.ID;
    Allergies.findOne({ ID: AllergieID })
        .then((Allergie) => {
            if (Allergie) {
                res.send(Allergie);
            } else {
                res.status(404).send("Aucun Allergie trouvé avec cet ID.");
            }
        })
        .catch((err) => {
            res.status(400).send(err);
        });
  });
//Vérifier ID Allergie********************************************************************************************
router.get('/VerifierID/:ID', (req, res) => {
    const AllergieID = req.params.ID;
    // Recherchez dans la base de données si un Allergie avec cet ID existe déjà
    Allergies.findOne({ ID: AllergieID })
        .then((Allergie) => {
            if (Allergie) {
                // Si un Allergie avec cet ID existe déjà, renvoyez true
                res.json(true);
            } else {
                // Si aucun Allergie avec cet ID n'existe, renvoyez false
                res.json(false);

            }
        })
        .catch((err) => {
            // En cas d'erreur, renvoyez un code d'erreur
            console.error('Erreur lors de la vérification de l\'ID du Allergie :', err);
            res.status(500).send('Une erreur s\'est Allergiee lors de la vérification de l\'ID du Allergie.');

        });
});

module.exports=router;