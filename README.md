# Passoia

Passoia é uma aplicação web moderna desenvolvida com React, focada em oferecer uma interface elegante e responsiva. Este projeto parece ser uma landing page ou vitrine para uma marca de moda ou estilo de vida, apresentando seções como lançamentos, looks e novidades.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias e ferramentas:

- **[React](https://react.dev/)** (v19): Biblioteca JavaScript para construção de interfaces de usuário.
- **[Vite](https://vitejs.dev/)**: Build tool rápida e leve para desenvolvimento frontend moderno.
- **[Sass](https://sass-lang.com/)**: Pré-processador CSS para estilos mais poderosos e organizados (arquivos `.scss`).
- **ESLint**: Ferramenta de linting para garantir a qualidade e consistência do código.

## 🎨 Estrutura do Projeto

A aplicação é estruturada em componentes reutilizáveis, organizados dentro do diretório `src/components`. A estrutura principal da página (`App.jsx`) é composta por:

- **Navbar**: Barra de navegação superior.
- **Hero**: Seção de destaque principal (banner).
- **Looks**: Seção para exibição de looks ou estilos.
- **Launches**: Área dedicada aos novos lançamentos.
- **News**: Seção de notícias ou novidades da marca.
- **Footer**: Rodapé completo com informações adicionais (pagamento, atendimento, etc.).

### Diretórios

```
src/
├── assets/      # Imagens e recursos estáticos
├── components/  # Componentes React isolados (cada um com seu estilo .scss/.css)
│   ├── Footer/
│   ├── Hero/
│   ├── Launches/
│   ├── Looks/
│   ├── Navbar/
│   └── News/
├── App.jsx      # Componente raiz que monta a página
├── main.jsx     # Ponto de entrada da aplicação
├── reset.css    # Reset de CSS para consistência entre navegadores
└── index.css    # Estilos globais
```

## 🛠️ Como Executar o Projeto

Siga os passos abaixo para rodar o projeto em sua máquina local:

### Pré-requisitos

Certifique-se de ter o **Node.js** instalado em sua máquina.

### Instalação

1. Clone o repositório (se aplicável) ou navegue até a pasta do projeto.
2. Instale as dependências do projeto:

```bash
npm install
```

### Desenvolvimento

Para iniciar o servidor de desenvolvimento local:

```bash
npm run dev
```

O servidor geralmente será iniciado em `http://localhost:5173` (ou outra porta disponível).

### Build de Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Para visualizar a versão de produção localmente:

```bash
npm run preview
```

## 📄 Scripts Disponíveis

No arquivo `package.json`, você encontrará os seguintes scripts:

- `dev`: Inicia o servidor de desenvolvimento com Vite.
- `build`: Compila o projeto para produção.
- `lint`: Executa o ESLint para verificar problemas no código.
- `preview`: Visualiza o build de produção localmente.

---

Desenvolvido como um Projeto Pessoal de Front End.
