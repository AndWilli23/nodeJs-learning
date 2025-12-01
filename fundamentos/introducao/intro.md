# O que é Node.js?

## 📌 O que você vai aprender
- Introdução ao node
- Requisitos ao Node
- Node.js vs.Navegador
- Linha de comando
- Motor Node V8
- Arquitetura
- Loop de eventos

## 📝 Conceitos

### Intodução ao Node: 

O node.js é um modelo orientado a eventos e não bloqueante. Isso o torna excelente para aplicativos em tempoo real e sites com alto tráfego: 

- Servidores web e sites;
- APIs REST;
- Aplicativos em tempo real (como bate-papo);
- Trabalhando com arquivos e bancos de dados;
- IoT e controle de hardware;

O `npm` é um gereciador de pacotes do Node.js, ele ajuda a instalar e gerenciar paotes (bibliotecas) de terceiros.

O Node foi progetado para desenvolvimento do lado do servidor, enquanto os navegadores são para aplicações do lado do cliente.

Node vs. Navegador:


| Funcionalidades     | Node.js | Browser |
|-------------|:-----:|------------:|
| Acesso a arquivos do sistema     |   Sim    | Não        |
| Networking (TCP/UDP)       | Sim  | Não        |
| acesso ao DOm     | Sim | Não       |
| Objeto global     | Global | window/self       |
| Modules       | CommonJS/ESM  | ESM/Scripts       |
| Variaveis de ambiente     | Sim (process.env) | Não          |
| Segurança     | Full OS acess | Sandboxed         |
| Mouse       | R$80  | 4          |
| geranciados de pacotes   | npm/yarn | CDM/Bundler          |



O Node disponibiliza uma poderosa interface de linha de comando (CLI) que permite executar arquivo javaScript, gerenciar pacotes, depurar aplicativos e muito mais.




## 💡 Exemplos

Para executar arquivo node.js (app.js, por exemplo) no terminal ou por prompt de comando usa-se `node app.js`

Para instalar dependecias do projeto, usamos o `npm install`
