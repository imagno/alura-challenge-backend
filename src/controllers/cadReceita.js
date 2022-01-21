const express = require('express');

const Receita = require('../models/receitas');

const router = express.Router();

router.post('/receita', async (req, res) => {
  const { descricao } = req.body;
  const mesmaDescricao = await Receita.findOne({ descricao });

  const { data } = req.body;
  const mesmaData = await Receita.findOne({ data });

  const mesmoMes = data.toString().split('/')[0];
  
  try {
    if (mesmaDescricao && mesmaData)
      return res.status(400).send({ erro: 'Receita já cadastrada para mês corrente.' });
    
      const despesa = await Receita.create(req.body);
    return res.json({ despesa });
    
  } catch (erro) {
    return res.status(400).send({ erro: 'Falha no registro' });
  }
});

module.exports = app => app.use('/cadreceita', router);
 