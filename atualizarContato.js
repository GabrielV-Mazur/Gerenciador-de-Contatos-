const contatos = require('./contatos');

function atualizarContato(id, novoContato) {
  const index = contatos.findIndex(contato => contato.id === id);
  if (index !== -1) {
    contatos[index] = { id, ...novoContato };
    return true;
  }
  return false;
}

module.exports = atualizarContato;