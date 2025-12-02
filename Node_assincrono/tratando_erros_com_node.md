# Tratamento de erros com Node.js


## 📌 O que você vai aprender

- Por que lidar com erros?
- Tipos de erros comuns no node.js
- Níveis de tratamento de erros

## 📝 Conceitos

### Tratamento de erros

*Erros são inevitáveis* em qualquer proram, mas a forma como são tratados faz toda diferença. Em Node.js o tratamento de erros é crucial porque: 

- Impede que as aplicações travem **inesperadamente**
- Fornecem **feedback** significativo aos usuários
- Facilita a **depuração** com um contexto de erro adeguado
- Ajuda a manter a **estabilidade** da aplicação em produção
- garante que os **recursos sejam devidamente limpos**


### Tipos de erros comuns no Node,js: 

#### Erros do programador (erros de código): 

- **SyntaxError**: 
    Ocorre quando o ódigo não está escrito de acordo com a sintaxe da linguagem.

- **ReferenceError**: 
    Surge ao tentar usar uma vriável que não foi declarada ou está fora do escopo.

- **TypeError**: 
    Ocorre quando há um tipo de dado inválido.

- **RangeError**: 
    Ocorre quando uma variável númerica está fora de um intervalo válido.

- **SystemError**:
    O SystemError (em português, erro de sistema) acontece quando cometemos alguma violação do sistema operacional enquanto executamos nosso código, como ler um arquivo que não existe.

    Algumas **strings representadoras de erros** do SystemError: 

    1. ENOENT → Acontece quando não existe a entidade esperada (arquivo ou diretório) no caminho que especificamos;
    
    2. EISDIR → Ocore quando uma operação agaurda um *arquivo* e recebe um *diretório*;
    
    3. ENOTDIR → Ocorre quando uma operação recebe um arquivo existente, mas na verdade ela aguardava um *diretório*;
    
    4. ENOTFOUND → Acontece quando não é posível estabelecer uma conexão com algum host devido a um erro de  `Domain Name System – Sistema de nome de domínio.`. Podendo significar um valor incorreto de host, ou localhost não sendo mapeado corretamente;
    
    5. ETIMEDOUT → Quando há uma solicitação `HTTP` aguardado resposta por um longo tempo, recebemos esse erro;
    
    6. ECONNREFUSED → Ocorre ao tentar se conectar em um máquina de destino e ela recusa a solicitação.
    
    7. EADDRINUSE → Acontece quando já existe um servidor web rodando em uma porta e tentamos levantar outra na mesma porta.
    
    8. EADDRNOTAVAIL → Geralmente indica um problema de configuração com seu endereço IP, como vincular seu servidor a um IP estático.


#### Erros operacionais (erros de tempo de execução): 

- **Uso excessivo de memória**: 
    Ocorre quando a aplicação consome mais memória do que a disponível.

- **Falha ao conectar ou resolver nome do host**: 
    Ocorre quando o aplicativo não consegue se conectar a outro servidor ou a um serviço externo.


### Níveis de tratamento de erros:

#### Tratamenrto básico:

##### **Callbacks que priorizam erros: **

    O padrão mais comun nos módulos do Node.js é aquele em que o primeiro argumento de uma função callback é um objeto de erro: 

    ```
        function exemple(filaname, callback) {
            fs.readFile(filename, 'utf8', (er, data) => {
                if(err) {
                    ...
                } else if (err.code === 'EACCES') {
                    ...
                } 
                return callback(err);
            }
                try {
                    const config = JSON.parse(data);
                    callback(null, config);
                } catch (parseError) {
                    callback(new Error(`Invalid JSON in ${filename}`))
                }

            )
        }
    ```

#### Tratamenrto moderno:

##### **Utilizando try...catch com Async/Await **

    Com Async/await, pode-se usar blocos try/catch tanto para código síncronos quanto assíncrono; (Segue exemplo arquivo `Node_assincrono/exemplos`)

#### Tratamento de erros globais:

##### **Exceções não tratadas: **

    Para erros *inesperados*, deve-se monitorar a ocorr~encia de `uncaughtException` para realizar a limpeza antes de encerrar o programa. (Segue exemplo arquivo `Node_assincrono/exemplos/niveis_tratamento_erros`)


## 🎉 Boas práticas: 

O que deve ser feito: 

- Lidar com erros no nível apropriado
- Registrar os erros com contexto suficiente
- Utilizar tipos de erros personalizados para diferentes cenários
- Limpar recursos em blocos finally
- Validar a entrada para detectar erros precocemente

O que não deve ser feito: 

- Ignorar erros (blocos catch vazios)
- Expor detalhes confidenciais de erros aos clientes
- Usa um sistema try/catch para controle de fluxo
- Ignorar os erros sem registrá-los
- Continuar a execução após erros irrecuperáveis



