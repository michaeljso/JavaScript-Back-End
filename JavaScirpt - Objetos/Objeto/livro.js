const livro = {
    titulo:'O código da Vinci',
    autor:'Dan Brown',
    anoPublicacao:2006,
    genero:'Ficção'
    
  }
  
  console.log(livro);
  
  anoAtual = new Date().getFullYear();
  
  console.log(anoAtual);
  
  livro.idadePublicacao = anoAtual - livro.anoPublicacao;
  
  console.log(livro);
  
  const mostrarDetalhes = `O livro se chama ${livro['titulo']}, do autor ${livro['autor']} 
  com gênero ${livro['genero']}, e foi publicado a ${livro['idadePublicacao']} anos.`;
  
  console.log(mostrarDetalhes);
  