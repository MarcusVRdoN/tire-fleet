# Tire Fleet (Frota Pneu)

Sistema de Gestão de Pneus para Frotas

Aplicação web para digitalização e controle da manutenção de pneus em frotas de transporte, criada como parte do projeto de prototipagem de alta fidelidade da disciplina de **Laboratório de SImulção e Prototipagem** do curso de **Análise e Desenvolvimento de Sistemas da ULBRA**.

[🔗 Link de acesso ao projeto na web](https://tire-fleet.vercel.app/)

---

## 📌 Sobre o Projeto

A **Tire Fleet** foi desenvolvida para resolver um problema real enfrentado por uma empresa do setor de transportes em Porto Alegre, que realizava o controle da manutenção de pneus de forma manual. O processo antigo gerava erros frequentes, informações desatualizadas, aumento de custos operacionais e riscos à segurança dos motoristas.

### 🎯 Objetivos:

- Digitalizar o registro de manutenções.
- Reduzir custos operacionais.
- Aumentar a segurança da frota.
- Garantir rastreabilidade e eficiência nos processos.

---

## 🧩 Funcionalidades Principais

- **Registro de Manutenção:**

  - Cadastro de serviços realizados, como troca ou recapagem de pneus.
  - Informações como placa, tipo de serviço, data e observações.

- **Atualização de Equipamentos:**

  - Atualização de status dos pneus e componentes monitorados.

- **Histórico da Frota:**

  - Consulta ao histórico completo de manutenções por veículo.

- **Alertas e Lembretes:**

  - Notificações para revisões e recapagens programadas.

- **Relatórios Gerenciais:**

  - Indicadores como custo por veículo, frequência de serviços, taxa de erro de registro.

- **Autenticação de Usuário:**
  - Login com credenciais distintas para borracheiros e gestores.

---

## 🖼️ Protótipo

### ✅ Acesso ao protótipo de alta fidelidade:

🔗 [https://tire-fleet.vercel.app/](https://tire-fleet.vercel.app/)

**Login:** `admin`  
**Senha:** `admin`

---

## 🛠️ Tecnologias Utilizadas

| Camada   | Tecnologia                                     |
| -------- | ---------------------------------------------- |
| Frontend | Vite, React, JavaScript, HTML, CSS             |
| Backend  | Node.js / Express                              |
| Deploy   | Vercel                                         |
| Outras   | ESLint, Prettier (para padronização de código) |

---

## 📂 Estrutura do Projeto

```bash
tire-fleet/
├── public/                  # Arquivos estáticos
├── src/                     # Código-fonte
│   ├── assets/              # Ícones e imagens
│   ├── components/          # Componentes reutilizáveis
│   ├── layout/              # Estrutura de layout
│   ├── scss/                # Estilos SCSS
│   ├── views/               # Telas principais
│   ├── _nav.js              # Componente de Navegação (Sidebar)
│   ├── App.js               # Componente principal
│   ├── index.js             # Ponto de entrada da aplicação
│   ├── routes.js            # Rotas da aplicação
│   └── store.js             # Store/estado global (redux)
├── .editorconfig            # Arquivo de configuração do editor
├── .eslintrc.js             # Configuração do ESLint
├── .gitignore               # Arquivos ignorados pelo Git
├── .prettierignore          # Arquivos ignorados pelo Prettier
├── .prettierrc.js           # Configuração do Prettier
├── index.html               # Arquivo HTML principal
├── LICENSE                  # Licença do projeto
├── package-lock.json        # Arquivo de lock de dependências
├── package.json             # Arquivo de configuração de dependências
├── README.md                # Documentação do projeto
├── vercel.json              # Configuração de deploy
└── vite.config.mjs          # Configuração do Vite
```

---

## ▶️ Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/MarcusVRdoN/tire-fleet.git
cd tire-fleet

# 2. Instale as dependências
npm install

# 3. Rode o projeto em seu ambiente
npm run start

# 4. Acesse o projeto no navegador
open http://localhost:3000
```

---

## 🧪 Casos de Uso

```
Ator: Borracheiro
 - Registrar manutenção de pneu
 - Atualizar status do pneu
 - Consultar histórico do veículo

Ator: Gestor
 - Gerar relatórios de desempenho
 - Receber alertas de manutenção
 - Gerenciar acesso ao sistema
```

---

## 👨‍🎓 Autor

Desenvolvido por **Marcus Vinícius Ribeiro do Nascimento**

- [marcus.nascimento@rede.ulbra.br](mailto:marcus.nascimento@rede.ulbra.br)
- Projeto acadêmico - ULBRA - Laboratório de Simulação e Prototipagem
- Orientador: Prof. Taciano Balardin de Oliveira

---

## 📄 Licença

Este projeto é acadêmico e distribuído sob a licença MIT.
Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📈 Próximas Melhorias (Roadmap)

- Integração com banco de dados
- Dashboard com gráficos interativos
- Filtros avançados por tipo de serviço e placa
- Upload de imagens das manutenções
- Módulo de auditoria e logs
