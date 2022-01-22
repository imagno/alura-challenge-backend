const express = require('express');

const Despesa = require('../models/despesas');

const router = express.Router();

router.post('/despesa', async (req, res) => {
  const { descricao, data } = req.body;
  const condicao = await Despesa.findOne({ descricao, data });
  const descCondicao = condicao.descricao; console.log(descCondicao);
  const dataCondicao = String(condicao.data).split(' ')[1]; console.log(dataCondicao);
  
  try {
    if (descCondicao && dataCondicao)
      return res.status(400).send({ erro: 'Despesa já cadastrada para mês corrente.' });
    
    const despesa = await Despesa.create(req.body);
    return res.json({ despesa });
    
  } catch (erro) {
    return res.status(400).send({ erro: 'Falha no registro' });
  }
});

module.exports = app => app.use('/caddespesa', router);