# O que é Node.js?

## 📌 O que você vai aprender
- Introdução ao Node
- Requisitos do Node
- Node.js vs. Navegador
- Linha de comando
- Motor V8
- Arquitetura
- Loop de eventos

## 📝 Conceitos

### Introdução ao Node

O **Node.js** é um modelo orientado a eventos e não bloqueante. Isso o torna excelente para aplicações em tempo real e sites com alto tráfego, como:

- Servidores web e sites  
- APIs REST  
- Aplicativos em tempo real (como chats)  
- Manipulação de arquivos e bancos de dados  
- IoT e controle de hardware  

O `npm` é o **gerenciador de pacotes do Node.js**, que ajuda a instalar e gerenciar pacotes (bibliotecas) de terceiros.

O Node foi projetado para desenvolvimento do **lado do servidor**, enquanto os navegadores são usados para aplicações do **lado do cliente**.

## Node.js vs. Navegador

| Funcionalidade             | Node.js | Browser |
|----------------------------|:-------:|:-------:|
| Acesso ao sistema de arquivos | ✔️ | ❌ |
| Networking (TCP/UDP)       | ✔️ | ❌ |
| Acesso ao DOM              | ❌ | ✔️ |
| Objeto global              | `global` | `window` / `self` |
| Módulos                    | CommonJS / ESM | ESM / Scripts |
| Variáveis de ambiente      | ✔️ (`process.env`) | ❌ |
| Segurança                  | Acesso ao SO | Sandboxed |
| Gerenciadores de pacotes   | npm / yarn | CDN / Bundlers |

## Linha de comando

O Node disponibiliza uma poderosa interface de linha de comando (CLI) que permite:

- Executar arquivos JavaScript  
- Gerenciar pacotes  
- Depurar aplicações  
- Executar scripts personalizados  

## Motor V8

Desenvolvido pelo Google, o **V8** compila JavaScript para código de máquina nativo, permitindo execução extremamente rápida.

Ele é rápido devido a:

- **Compilação Just-In-Time (JIT)** → converte o Js em código de máquina otimizado em vez de interpretá-lo
- **Cache embutido** 
- **Coleta de lixo eficiente (GC)** → gerencia a memória para evitar vazamentos e otimiza o desempenho.

O V8 também permite:

- Executar JavaScript fora do navegador  
- Acessar recursos do sistema operacional (via Node.js)

## Arquitetura do Node

A arquitetura do Node usa uma **thread única**, orientada a eventos, projetada para lidar com várias conexões simultaneamente.

### Diagrama de arquitetura (descrição)

#### 1. Fase de Solicitação do Cliente
- Os clientes enviam solicitações ao servidor Node.js.  
- Cada solicitação é adicionada à **fila de eventos**.

#### 2. Fase do Loop de Eventos
- O Event Loop verifica continuamente a fila.  
- Trata solicitações uma a uma em um ciclo infinito.

#### 3. Processamento de Requisições
- **Tarefas simples (não bloqueantes)** → tratadas pela thread principal.  
- **Tarefas complexas/bloqueantes** → enviadas ao *Thread Pool*.

#### 4. Fase de Resposta
- Quando tarefas complexas terminam, seus callbacks vão para a fila.  
- O Event Loop processa os callbacks e envia as respostas.

## Loop de Eventos

O Event Loop torna o Node.js não bloqueante e eficiente.  
Ele gerencia operações assíncronas delegando tarefas ao sistema e processando seus resultados por meio de callbacks, Promises ou eventos.

O Node segue esta ordem para lidar com operações:

1. Executar o script principal (código síncrono)  
2. Processar **microtarefas** (Promises, `process.nextTick`)  
3. Executar **temporizadores** (`setTimeout`, `setInterval`)  
4. Executar callbacks de **E/S** (filesystem, rede)  
5. Executar callbacks **imediatos**  
6. Lidar com eventos de **fechamento** (ex.: `socket.on("close")`)

## 💡 Exemplos

### Executar um arquivo Node.js
```bash
node app.js 
```

### Instalar pacotes com npm
```bash
npm install express
```

