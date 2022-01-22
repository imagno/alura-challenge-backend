const mongoose = require('../database');

const ReceitaSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },
  descricao: {
    type: String,
    require: true,
    lowercase: true,
  },
  valor: {
    type: Number,
    require: true,
  },
  data: {
    type: Date,
    require: true,
  }
});

const Receita = mongoose.model('Receita', ReceitaSchema);

module.exports = Receita;