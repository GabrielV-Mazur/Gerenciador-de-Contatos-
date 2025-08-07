const contatos = require('./contatos');

function removerContato(id) {
  const index = contatos.findIndex(contato => contato.id === id);
  if (index !== -1) {
    contatos.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = removerContato;