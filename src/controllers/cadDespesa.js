const express = require('express');

const Despesa = require('../models/despesas');

const router = express.Router();

router.post('/despesa', async (req, res) => {
  const { descricao, data } = req.body;
  const condicao = await Despesa.findOne({ descricao, data });
  // const descCondicao = condicao.descricao; console.log(descCondicao);
  // const dataCondicao = String(condicao.data).split(' ')[1]; console.log(dataCondicao);
  
  try {
    if (condicao)
      return res.status(400).send({ erro: 'Despesa já cadastrada neste dia.' });
    
    const despesa = await Despesa.create(req.body);
    return res.json({ despesa });
    
  } catch (erro) {
    return res.status(400).send({ erro: 'Falha no registro' });
  }
});

router.get('/despesa', async (req, res) => {
  const consultaDespesa = await Despesa.find(req.body);
  // const { descricao, valor, data } = consultaDespesa;

  try {
    return res.json(consultaDespesa);
  }catch (erro) {
    return res.status(400).send({ erro: 'Falha na consulta' });
  }
});

router.put('/despesa/:id', async(req, res) => {
  const { id } = await Despesa.findOneAndUpdate(req.body);
  try {
    return res.json({ id });
  } catch {
    return res.status(400).send({ erro: 'Falha na atualização' });
  }
});

module.exports = app => app.use('/caddespesa', router);