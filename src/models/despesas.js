const mongoose = require('../database');

const DespesaSchema = new mongoose.Schema({
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

const Despesa = mongoose.model('Despesa', DespesaSchema);

module.exports = Despesa;