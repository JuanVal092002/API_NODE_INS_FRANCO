//routes operarios.js
const express = require("express");
const userShema = require("../models/operarios");

const router = express.Router();

// Crear operario
router.post('/operarios', (req, res) => {
    const operario = userShema(req.body); // Crear una instancia del modelo Operario
    operario.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


// get all operarios

router.get('/operarios', (req, res) => {
    userShema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});



// get one operarios

router.get('/operarios/:id', (req, res) => {
    const {id} = req.params;
    userShema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


// update one operarios

router.put('/operarios/:id', (req, res) => {
    const {id} = req.params;
    const { cedula, nombreCompleto, telefono, direccion, barrio,
    email} = req.body;
    userShema
        .updateOne({_id:id},{$set:{cedula, nombreCompleto, telefono, direccion, barrio, email}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


// delete one operarios

router.delete('/operarios/:id', (req, res) => {
    const {id} = req.params;
    userShema
        .findByIdAndDelete({_id:id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = router;

