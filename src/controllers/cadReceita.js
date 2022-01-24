const express = require('express');

const Receita = require('../models/receitas');

const router = express.Router();

router.post('/receita', async (req, res) => {
  const { descricao, data } = req.body;
  const condicao = await Receita.findOne({ descricao, data });
  
  try {
    if (condicao)
      return res.status(400).send({ erro: 'Receita já cadastrada neste dia.' });
    
    const receita = await Receita.create(req.body);
    return res.json({ receita });
    
  } catch (erro) {
    return res.status(400).send({ erro: 'Falha no registro' });
  }
});

router.get('/receita', async (req, res) => {
  const consultaReceita = await Receita.find(req.body);
  // const { descricao, valor, data } = consultaReceita;

  try {
    return res.json(consultaReceita);
  }catch (erro) {
    return res.status(400).send({ erro: 'Falha na consulta' });
  }
});

router.put('/receita/:id', async(req, res) => {
  const { id } = await Receita.findOneAndUpdate(req.body);
  try {
    return res.json({ id });
  } catch {
    return res.status(400).send({ erro: 'Falha na atualização' });
  }
});

module.exports = app => app.use('/cadreceita', router);
 