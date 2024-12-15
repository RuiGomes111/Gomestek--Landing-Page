# Gomestek Website

## Descrição

O projeto consiste em um website responsivo para a Gomestek, uma empresa especializada em soluções digitais. O site foi desenvolvido utilizando HTML, CSS e JavaScript para oferecer uma experiência de usuário moderna e interativa.

## Funcionalidades

- **Navegação responsiva:** Menu adaptado para dispositivos móveis com animações.
- **Seções principais:**
  - Home
  - Sobre
  - Serviços
  - Contato
- **Formulário de contato:** Envio de mensagens com validação de campos e integração ao FormSubmit para gerenciamento.
- **Efeitos de animação:** Implementados com a biblioteca AOS (Animate on Scroll).
- **Alternação de conteúdo:** Botões dinâmicos para exibição de serviços diferentes.
- **Responsividade:** Suporte para diferentes tamanhos de tela, desde desktops a dispositivos móveis.

## Tecnologias Utilizadas

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript (ES6+)
- **Bibliotecas:**
  - AOS (Animate on Scroll)
- **APIs/Serviços:**
  - FormSubmit para envio de formulários

## Estrutura do Projeto

```
project/
├── assets/
│   ├── css/
│   │   ├── form.css
│   │   ├── style.css
│   │   └── meio.css
│   ├── js/
│   │   ├── mobile-navbar.js
│   │   ├── btnConfig.js
│   │   └── form.js
│   └── img/
│       ├── LOGO5.webp
│       ├── ex.webp
│       ├── trafego.webp
│       ├── hardware1.webp
│       └── mentoria.webp
├── index.html
├── sobre.html
├── politica.html
├── termos.html
```

## Como Executar

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Abra o arquivo `index.html` no navegador para visualizar o site.

## Explicação dos Arquivos Principais

- **`index.html`:** Arquivo principal que define a estrutura do site.
- **CSS:**
  - `form.css`: Estilização do formulário de contato.
  - `style.css`: Estilização geral do site.
  - `meio.css`: Estilização específica para a seção de serviços.
- **JavaScript:**
  - `mobile-navbar.js`: Implementação do menu responsivo.
  - `btnConfig.js`: Controla a alternância de conteúdo na seção de serviços.
  - `form.js`: Validação e envio do formulário de contato.

## Recursos Externos

- [AOS.js](https://michalsnik.github.io/aos/): Para animações ao rolar a página.
- [FormSubmit](https://formsubmit.co/): Gerenciamento de envio de formulários.

## Melhorias Futuras

- Implementar uma API backend própria para gerenciamento dos formulários.
- Adicionar otimização de SEO para melhor posicionamento em motores de busca.
- Integrar mais serviços digitais, como calendários para agendamento.

## Autor
Desenvolvido por **[https://github.com/RuiGomes111]**.

## Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE] para detalhes.

