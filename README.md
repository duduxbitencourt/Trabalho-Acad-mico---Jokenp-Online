# ✂️📄🪨 Jokenpô Online - Interactive Web Game

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge)

## 💻 Sobre o Projeto

Este projeto é uma implementação interativa do clássico jogo **Pedra, Papel e Tesoura**, desenvolvida como parte da disciplina de **Desenvolvimento em JavaScript** (Unidade 3 - Programação Orientada a Eventos).

O objetivo principal foi aplicar conceitos de **Engenharia de Front-end** para criar uma experiência de usuário fluida, utilizando manipulação de DOM para controle de estados e CSS avançado para feedback visual.

### ✨ Funcionalidades

- **Mecânica de Jogo Completa:** Lógica de vitória, derrota e empate contra a CPU (RNG).
- **Feedback Visual Dinâmico:**
  - Transições de estado (Seleção -> Suspense -> Resultado).
  - Animações CSS (`@keyframes`) para simular o movimento das mãos.
  - Feedback semântico (cores de fundo alteram conforme o resultado).
- **Interface Cartoon:** Design consistente utilizando assets personalizados e sombras via `filter: drop-shadow`.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica e acessível.
* **CSS3:** Animações, Flexbox para layout e variáveis de estilo.
* **JavaScript (ES6+):**
    * Manipulação do DOM (Cache de seletores).
    * Programação Assíncrona (`setTimeout` para controle de fluxo da animação).
    * Gerenciamento de Estado da aplicação.

## 🧠 Aprendizados Técnicos

Durante o desenvolvimento, foram aplicados conceitos importantes de arquitetura de software:

1.  **Cacheamento do DOM:** Armazenamento de referências de elementos em constantes para otimizar a performance.
2.  **Separação de Responsabilidades:** CSS cuida da aparência (classes utilitárias como `.d-none`), enquanto o JS gerencia a lógica.
3.  **Assincronismo no Frontend:** Uso de *timers* para criar a sequência de suspense "JO... KEN... PÔ!" antes de revelar o resultado.

## 🚀 Como Executar

1.  Faça o clone deste repositório em sua máquina local.
2.  Abra o arquivo `index.html` diretamente no seu navegador.

---
Desenvolvido por Eduardo Bitencourt, para fins acadêmicos.
