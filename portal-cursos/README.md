Esta é a aplicação “Portal de Cursos” com duas páginas: Início e Cadastro. O
menu permitirá navegar sem recarregar a página. Na página Cadastro há um
formulário com validações e mensagens claras. Ao concluir, será possível navegar,
preencher, testar erros e visualizar uma confirmação de cadastro simulado.

Explicação: useState guarda os valores, erros e a mensagem de sucesso. onChange
atualiza os campos. onSubmit chama enviar(); preventDefault evita o recarregamento.
validar() retorna um objeto com erros. O cadastro só é confirmado quando esse objeto
está vazio.

Como iniciar o projeto: 
- abra a pasta "portal-cursos" com "cd portal-cursos"
- para instalar as dependências execute "npm install"
- para rodar o servidor execute "npm run dev"

Pronto, para acessar a aplicação, abra o endereço local indicado no terminal (geralmente http://localhost:5173).

Caso queira encerrar o servidor, pressione Ctrl+C. Não feche o terminal durante os testes.