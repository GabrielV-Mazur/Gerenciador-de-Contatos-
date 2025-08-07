const contatos = require('./contatos');

function adicionarContato(contato) {
  contatos.push(contato);
}

module.exports = adicionarContato;