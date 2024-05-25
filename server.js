const nodemon = require('nodemon');

// Configuração do nodemon
nodemon({
  script: './javascript/dados.js', // Caminho para o arquivo do servidor
  ext: 'js', // Extensões a serem observadas (pode adicionar mais se necessário)
  ignore: [], // Arquivos/diretórios a serem ignorados
  quiet: false, // Se true, não imprime mensagens de reinicialização
}).on('start', function () {
  console.log('Servidor está em execução!');
}).on('restart', function () {
  console.log('Servidor reiniciado devido a alterações nos arquivos.');
}).on('quit', function () {
  console.log('Servidor foi encerrado.');
});
