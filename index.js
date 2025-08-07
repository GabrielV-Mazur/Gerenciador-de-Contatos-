const readline = require('readline');
const listarContato = require('./listarContato');
const adicionarContato = require('./adicionarContato');
const atualizarContato = require('./atualizarContato');
const removerContato = require('./removerContato');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu() {
  console.log(`
=== MENU ===
1. Listar contatos
2. Adicionar contato
3. Atualizar contato
4. Remover contato
5. Sair
  `);

  rl.question('Escolha uma opção: ', opcao => {
    switch (opcao) {
      case '1':
        listarContato();
        menu();
        break;

      case '2':
        rl.question('Nome: ', nome => {
          rl.question('Telefone: ', telefone => {
            rl.question('Email: ', email => {
              adicionarContato({ id , nome, telefone, email });
              console.log('Contato adicionado com sucesso!\n');
              menu();
            });
          });
        });
        break;

      case '3':
        rl.question('ID do contato a atualizar: ', idStr => {
          const id = parseInt(idStr);
          rl.question('Novo nome: ', nome => {
            rl.question('Novo telefone: ', telefone => {
              rl.question('Novo email: ', email => {
                const atualizado = atualizarContato(id, { nome, telefone, email });
                if (atualizado) {
                  console.log('Contato atualizado com sucesso!\n');
                } else {
                  console.log('Contato não encontrado.\n');
                }
                menu();
              });
            });
          });
        });
        break;

      case '4':
        rl.question('ID do contato a remover: ', idStr => {
          const id = parseInt(idStr);
          const removido = removerContato(id);
          if (removido) {
            console.log('Contato removido com sucesso!\n');
          } else {
            console.log('Contato não encontrado.\n');
          }
          menu();
        });
        break;

      case '5':
        console.log('Encerrando...');
        rl.close();
        break;

      default:
        console.log('Opção inválida.\n');
        menu();
        break;
    }
  });
}

menu();