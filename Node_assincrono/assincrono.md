# Node.js Assíncrono


## 📌 O que você vai aprender

- Node Assíncrono
- Node Promises
- Node Async/Await

## 📝 Conceitos

### Node Assíncrono

Em **Node.js**, as operações assíncronas permitem que o programa execute outras tarefas enquanto aguarda a conclusão de tarefas como entrada/saída de arquivos ou solicitações de rede.

**Síncrono** vs. **Assíncrono**:

#### 1. Síncrono:

- Bloqueia a execução até que seja concluída
- Fácil de entender
- Pode causar atrasos
- Utiliza funções como `readFileSync`

#### 1. Assíncrono:

- Execução não bloqueante
- Melhor desempenho
- Mais complexo de lidar
- Utiliza **callbacks**, **promises** ou **async/await**

## Node Promises

As promises em Node,js oferecem uma maneira mais limpa de lidar com operações assíncronas em comparação com os callbacks tradicionais.

#### **Estado prometido:**

- **Pendente** → Estado inicial, operaçõ não concluída
- **Concluído** → Operação finalizada com sucesso
- **Rejeitado** → Operação falhou

#### **Principais vantagens do uso de promises:**

- Estrutura mais limpa
- Melhor Tratamento de erros com um único recurso
- Mais fácil de compor e encadear operações
- Suporte integrado para operações paralelas

#### **Criando e usando Promises:**

As Promises podem ser criadas usando **Promise constructor**, que aceita uma função executara com dois parametros `resolve` e `reject`

Exemplo de promises básicas:

```
    const myPromise = new Promise((resolve, reject) => ) {

    setTimeout(() => {

    const sucess = Math.random() > 0.5;

    if(sucess) {

        resolve("operation completed successfuly");
        } else {
            reject(new error("Operatios failed"))
        }}, 1000)
        }

    myPromise
    .then(result => console.log("Sucess", result))
    .catch(error => console.error("Error", erro.message))

```

#### Métodos Promises:

1. **Promise.then()**:

O método `then()` aceita até dois argumentos, que são funções callback para os casos de sucesso ou falha da Promise

```
myPromise
    .then(
    result => console.log(result),
    error => console.error(error)
    );
```

2. **Promise.catch()**

O método `catch()` lida com promises rejeitadas e é equivalente a `.tehn(null, erroHandler)`.

```
myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));
```

3. **Promise.finally()**

O método `finally()` executa o código indepentemente se a promise foi cumprida ou rejeitada

```
myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log('Operation completed'));
```

4. **Promise.all**

O `Promise.all()` é usado para executar várias promises em parelelo e aguardar todas eles sejam concluídas. Ela falha rapidamente se alguma promise for rejeitada.

```
    const fs = require('fs').promises;

    const promise1 = Promise.resolve('First result');

    const promise2 = new Promise((resolve) => setTimeout(() => resolve('Second result'), 1000));

    const promise3 = fs.readFile('data.txt', 'utf8'); // Read local file instead of fetch

    Promise.all([promise1, promise2, promise3])
    .then(results => {
    console.log('Results:', results);

    // results[0] is from promise1

    // results[1] is from promise2

    // results[2] is the content of data.txt
    })
    .catch(error => {
    console.error('Error in one of the promises:', error);
});
```

#### Leitura síncrona de arquivos

```bash
    const fs = require("fs");
    console.log("1. Starting sync read...");
    const data = fs.readFileSync("myfile.txt", "utf8");
    console.log("2. File contents:", data);
    console.log("3. Done reading file")
```
#### **Saída**:

- 1 → Starting sync read...
- 2 → File contents: This is the content of myfile.txt
- 3 → Done reading file

#### Leitura assíncrona de arquivos

```bash
    const fs = require("fs");
    console.log("1. Starting async read...");
    fs.readFile("myfile.txt", "utf8", (err, data) => {

    if (err) throw err;
        console.log("2. File contents:", data)
    });
    console.log("3. Done starting read operation")
```
#### **Saída**:

- 1 → Starting async read...
- 3 → Done starting read operation
- 2 → File contents: This is the content of myfile.txt

## **Async/Await**:

É uma maneira moderna de lidar com operações assíncronas em Node.js, construída sobre Promises para criar um código ainda mais legível.

#### **Sintaxe e uso do Async/Await**:

- *Async*: Usado para declarar uma função assíncrona que retorna uma Promise.

- *Await*: Utilizado para pausar a execução até que uma Promise seja resolvida; so poder ser usado dentro de funções assíncrona.

Ex. de uso:

```
    async function getData(){

    const result = awai fetch(http://localhost:3000);

    return result

    }
```

Outra vantagem do async/await é que ele permite o uso de blocos **try/cacth** para tratamentos de erros.

## 🎉 Boas práticas 

1. Funções assíncronas sempre retornam Promises.

2. use `Promise.all` para operações simultâneas.

3. Sempre lide com os erros.

4. Evite misturar async/await com callbacks.

5. Crie funções assíncronas limpas.