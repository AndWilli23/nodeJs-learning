# Módulos básicos do Node.js

## 📌 O que você vai aprender
- O que são módulos
- CommoJs e ECMAScript
- Npm
- package.json e package-lock.json
- Npm Scripts
- versionamento semântico:


## 📝 Conceitos

### O que são módulos? 


Os módulos são os blocos de construção das aplicações Node.js, ou seja, são arquivos Js independentes que encapsulam funcionalidades reutilizáveis.

> Em Node.js, cada arquivo é tratado como um módulo seperado. 

O Node possui dois sistemas de módulos: **CommonJs** e **ECMAScript**:

#### **CommonJs:**

O Node vai considerar os seguintes arquivos como CommoJs: 

1. Arquivos com extensão `.cjs`

2. Arquivos `.js` quando o arquivo pai mais próximo do `package.json` estiver com o `type` com o valor *"CommonJs"*

3. Arquivos com extensão diferentes de .commonjs (`.mjs`, `.cjs`, `.js`, `.json`, `.node.js`) são serão considerados como módulos CommonJs quando incluídos via `require()`.

A chamada `require()` sempre carregará *CommonJs*. Em contra partida, a chamada `import()` carregará módulos ECMAScript.

Alguns módulos integrados ao Node.js: 

- **fs**: 
    manipulação de arquivos.

- **http**: 
    Server e Client HTTP

- **path**: 
    Utilitários de caminhos de arquivos

- **os**: 
    Utilitários do sistema operacional

- **url**: 
    Análise de URL

Uma das formulas de acessar e utilizar esses módulos é utilizando o `require()` ou o `import()` dos mesmos: 

```
//CommonJs
const url = require("url");

//ECMAScript
import url from "node:url";
```

Como vimos anteriormente, todo arquivo JavaScript é considerado um módulo. Sendo assim, para *exportar* funcionalidades de um módulo, podemos: 

1. Exportar vários itens usando o `exports` (*CommonJS*):

```
exports.exemFuncao = exemFuncao;
```

2. Exportando um único item usando o `module.exports` (*CommonJS*):

```
module.exports = exemClasse;
```

3. Exportando apenas funções "marcadas" de um arquivo (*ECMAScript*):

```
function exemFuncaoNaoExportada() = {
    ...
}

export function exemFuncaoExportada() = {
    ...
}
```

4. Exportando funções "marcadas" de forma menos verbosa (*ECMAScript*):

```
function exemFuncao1() = {
    ...
}

function exemFuncao2() = {
    ...
}

export {exemFuncao1, exemFuncao2}
```

#### **ECMAScript:** 

O *ES modules*  é o farmato oficial para empacotar código Js para reutilização. Sendo introduzido no Js a partir do ES6, o ECMAScript oferece uma forma mais estruturada de trabalahr com módulos.

Para utilização do ECMAScript a propriedade do *package.json* `type` deve possuir o valor atribuido como `module`. Dessa maneira, todos os arquivos `.js` serão considerados como ES (ECMAScript). 

> Outra forma de trabalhar com arquivos ES, é utilizando a extenção em arquivos `.mjs` ou invés de `.js`.

Um consideração importante é que os módulos, quando carregados pela primeira vez, são armazenados em cache, ou seja, cada chamada retornará exatamente o mesmo objeto, caso a função aponte para o mesmo arquivo.

### NPM:

O `npm` é o **gerenciador oficial de pacotes do Node.js**, que ajuda a instalar e gerenciar pacotes/módulos de terceiros.

Para instalar pacotes, podemos usar, por exemplo

```
npm install next
```

Também podemos:

```
//excluir um pacote
npm uninstall next
```

Esses pacotes serão armazenados na pasta `node-modules` na raíz do projeto. E esses pacotes podem ser introduzidos por `require()` ou `import()`.

Para mais detalhes sobre o `npm`, acesse: 
> https://www.npmjs.com/package/documentation 

### **package.json**

O `package.json` é um arquivo de manifesto do seu projeto. Nele contém o nome do projeto, depenências e suas versões, scripts e muito mais.

Para criar o `package.json` precisamos "startar"  o projeto com: 

```
npm init
```

Ao instalar um pacote com `npm` o pacote será adicionado na seção `dependencies` do arquivo.

Outra forma de organizar as dependências são as *dependências de desenvolvimento* que especifica as dependências que não serão instaladas em produção: 

```
devDependencies: {
    "prettier": "^9.12.0"
}
```

Para armazenar as dependências de desenvolvimento devemos: 

```
    npm install jest --save-dev
```

No exemplo acima o uso do `--save-dev` especifica que o jest será uma dependência de desenvolvimento do projeto.

Umas das vantagens do `package.json` é que colaboradores do projeto conseguem baixar todas as dependências necessárias para o desenvolmento apenas rodando o comando: 

```
npm install 
```

#### Scripts no package.json: 

Os Scripts NPM são comandos que podem ser definidos no `package.json` e facilitam o gerenciamento de tarefas comuns: 

- Rodar testes
- Executar migrations
- Levantar server
- Executar processos
- Entre outros

Os Scripts devem ser definidos em `scripts`: 

```
{
    "scripts": {
        "dev": "npm run next dev"
    }
}
```

Os scripts devem ser executados usando `npm rum` + o nome do script, `dev`, como no exemplo acima.

### versionamento semântico: 

Quando estamos desenvolvendo uma aplicação, com certeza ela usará alguma dependência e para não cairmos no "inferno de dependências", é extremamente necessário mantermos todas as dependências da forma mais transparente possível. O `npm` desempenha esse papel muito bem utilizando o versionamento semântico que divide as versões em 3 partes: 

- **patch (correção):** → Uma modificação no *patch* somente corrigirá algo;

- **Minor (menor):** → Trará uma nova funcionalidade, mas sem quebrar o que já existe;

- **Major (principal)** → Uma alteração na Major significa que há uma quebra na compatibilidade, o usuário deve fazer a alteração necessária para integrar sua aplicação novamente.

Todo projeto tem suas dependências e que cada dependência também possui suas dependências, e é aí que o `package-lock.json` entra.

### **package-lock.json**

Mesmo especificando a versão da dependência no `package.json`, as dependências dessa dependência também possuem suas versões. Ou seja, se considerarmos apenas a versão do `package.json`, podemos ter dois projetos com versões superficialmente idênticas, mas com comportamentos diferentes. Para evitar isso, o `package-lock.json` especifica também as versões de cada dependência; dessa forma, é possível garantir que todos os colaboradores tenham todas as dependências idênticas em sua totalidade.

## 🎉 Boas práticas

### lidando com módulos: 

- Módulos com responsabilidade únicas;
- Nomes de módulos claros e autoexplicativos
