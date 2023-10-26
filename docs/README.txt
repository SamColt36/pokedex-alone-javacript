O arquivo `script.sh` cria a árvore de diretórios e arquivos utilidados em projetos tailwindcss cujo auto utiliza. 

O arquivo `compiler.sh` compila o arquivo de saída css gerado pelo tailwind.config.js

Corrigir bug: Ao procurar novos pokemons na page details, as classes de type são adicionados ao body, fazendo com que fique com um classe para cada busca. Isso irá gerar conflito na hora de gerar o background do body. Dica: remover os estilos prévios para depois adicionar