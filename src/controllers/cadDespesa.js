const express = require('express');

const Despesa = require('../models/despesas');

const router = express.Router();

router.post('/despesa', async (req, res) => {
  const { descricao } = req.body;
  const mesmaDescricao = await Despesa.findOne({ descricao });

  const { data } = req.body;
  const mesmaData = await Despesa.findOne({ data });

  const mesmoMes = data.toString().split('/')[0];
  
  try {
    if (mesmaDescricao && mesmaData)
      return res.status(400).send({ erro: 'Despesa já cadastrada para mês corrente.' });
    
      const despesa = await Despesa.create(req.body);
    return res.json({ despesa });
    
  } catch (erro) {
    return res.status(400).send({ erro: 'Falha no registro' });
  }
});

module.exports = app => app.use('/caddespesa', router);