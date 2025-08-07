const contatos = require('./contatos');

function listarContato() {
  console.log('\n=== Lista de Contatos ===');
  contatos.forEach(contato => {
    console.log(`ID: ${contato.id}, Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
  });
  console.log('=========================\n');
}

module.exports = listarContato;