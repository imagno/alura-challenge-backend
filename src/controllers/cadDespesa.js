const express = require('express');

const Despesa = require('../models/despesas');

const router = express.Router();

router.post('/despesa', async (req, res) => {
  try {
    const despesa = await Despesa.create(req.body);
    return res.json({ despesa });
    
  } catch (erro) {
    return res.status(400).send(erro, 'Falaha no registro');
  }
});

module.exports = app => app.use('/caddespesa', router);