# MTrix - Sistema de Compra de Ingressos

Nesse projeto é desenvolvido o front-end completo de um sistema de compra de ingressos com Next.js, Material UI, TailwindCSS e TypeScript. A proposta é oferecer uma experiência moderna e responsiva para compra de ingressos online.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router e Server Components
- **TypeScript** - Tipagem estática para maior segurança
- **Material UI** - Biblioteca de componentes React
- **Tailwind CSS** - Framework CSS utilitário
- **Docker** - Containerização da aplicação
- **pnpm** - Gerenciador de pacotes rápido
- **Context API** - Gerenciamento de estado global
- **Lucide React** - Ícones modernos
- **Sonner** - Notificações toast

## 📋 Funcionalidades Principais

### 🎭 Listagem de Eventos
- **20 eventos únicos** com dados variados (Rock, Pop, Teatro, Jazz, etc.)
- **Sistema de busca** por título e descrição
- **Filtro por categorias** (tags)
- **Scroll infinito** com carregamento progressivo
- **Layout responsivo** para mobile, tablet e desktop

### 🛒 Sistema de Carrinho
- **Adicionar eventos** com controle de quantidade (máx. 4 por evento)
- **Persistência automática** no localStorage
- **Badge no header** contando eventos únicos
- **Remover itens** individualmente
- **Atualizar quantidades** em tempo real
- **Limpar carrinho** com abertura de dialog para confirmação
- **Cálculo automático** de preços e totais

### 📝 Formulário de Checkout
- **Campos completos** (nome, CPF, email, telefone, endereço, etc.)
- **Campos obrigatórios** configurados
- **Layout responsivo** adaptável

### 💾 Persistência de Dados
- **localStorage** para dados do formulário e carrinho
- **Context API** para gerenciamento de estado global
- **Carregamento automático** de dados salvos
- **Sincronização** entre abas do navegador
- **Limpeza automática** após finalização da compra

### 🎨 Interface e UX
- **Design** com tema customizado
- **Animações suaves** e transições
- **Loading states** em todas as ações
- **Toast notifications** para feedback
- **Confirmation dialogs** para ações destrutivas

## Como Executar

### Pré-requisitos
- Node.js 18+ 
- pnpm
- Docker (opcional)

### Desenvolvimento Local
```bash
# Clone o repositório
git clone https://github.com/hnascx/mtrix.git
cd mtrix/frontend

# Instale as dependências
pnpm install

# Execute em modo desenvolvimento
pnpm dev

# Acesse http://localhost:3000
```

### Com Docker
```bash
# Na raiz do projeto
docker-compose up --build

# Acesse http://localhost:3000
```

## 📱 Funcionalidades por Página

### Página Inicial (`/`)
- Listagem de eventos com scroll infinito
- Sistema de busca e filtros
- Cards responsivos com informações completas
- Adição ao carrinho com controle de quantidade

### Página de Checkout (`/checkout`)
- Formulário completo de dados pessoais
- Resumo do carrinho com quantidades
- Validação em tempo real
- Persistência automática no localStorage
- Finalização da compra

### Página de Confirmação (`/confirmation`)
- Detalhes da compra realizada
- Lista de ingressos adquiridos
- Botão para voltar aos eventos

## 🔧 Configurações Importantes

### Material UI + Tailwind CSS
- Configuração de conflitos resolvida
- Tema customizado com cores personalizadas
- Override de estilos padrão
- Responsividade otimizada

### localStorage
- **Chave do carrinho:** `mtrix-cart-data`
- **Chave do formulário:** `checkout-form-data`
- Persistência automática
- Limpeza do `mtrix-cart-data` após finalização

### Context API
- **CartContext:** Gerenciamento do carrinho
- **PurchaseContext:** Dados da compra finalizada
- **CheckoutFormContext:** Dados do formulário

## Design System

### Cores
- **Primary:** `#08181A` (Verde escuro)
- **Secondary:** `#244246` (Verde médio)
- **Background:** `#ffffff` (Branco)
- **Text:** `#374151` (Cinza escuro)

### Tipografia
- **Fonte:** Space Grotesk (Google Fonts)
- **Tamanhos:** Responsivos com breakpoints
- **Hierarquia:** Bem definida com variantes

### Componentes
- **Cards:** Bordas suaves, sombras sutis
- **Botões:** Estados hover, loading, disabled
- **Notificações:** Toast com posicionamento customizado

## 📊 Dados Mockados

O projeto inclui **20 eventos**, sendo eles:
- **Categorias:** Teatro, Show, Festival e etc
- **Localizações:** São Paulo (diversos bairros)
- **Datas:** Variadas em formato DD-MM-YYYY

## Fluxo de Compra

1. **Navegação** → Usuário navega pelos eventos
2. **Seleção** → Adiciona eventos ao carrinho
3. **Checkout** → Preenche dados pessoais
4. **Validação** → Sistema valida formulário
5. **Finalização** → Compra é processada
6. **Confirmação** → Dados exibidos e salvos
7. **Limpeza** → localStorage limpo ao voltar para página de eventos

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev          # Servidor de desenvolvimento
pnpm build        # Build de produção
pnpm start        # Servidor de produção
pnpm lint         # Linting do código

# Docker
docker-compose up --build    # Build e execução
docker-compose down          # Parar containers
```

## Estrutura de Dados

### Event
```typescript
interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  price: number
  imageUrl: string
  tag: string
}
```

### CartItem
```typescript
interface CartItem {
  event: Event
  quantity: number
}
```

### CheckoutFormData
```typescript
interface CheckoutFormData {
  fullName: string
  cpf: string
  email: string
  phone: string
  cep: string
  address: string
  city: string
  state: string
  paymentMethod: string
}
```

## 🎯 Funcionalidades Técnicas

### Hooks Customizados
- **useInfiniteScroll:** Scroll infinito com loading
- **useFormValidation:** Validação de formulários
- **useCart:** Gerenciamento do carrinho
- **useCheckoutForm:** Dados do formulário

### Componentes Reutilizáveis
- **QuantitySelector:** Controle de quantidade
- **LoadingSpinner:** Indicador de carregamento
- **ConfirmationDialog:** Dialog de confirmação
- **EventCard:** Card de evento
- **CartSummary:** Resumo do carrinho

### Utilitários
- **formatCurrency:** Formatação de moeda brasileira
- **Validações:** CPF, email, telefone, CEP

## 🔒 Validações Implementadas

- **CPF:** Algoritmo completo de validação
- **Email:** Formato e domínio válidos
- **Telefone:** Formato brasileiro
- **CEP:** Formato 00000-000
- **Campos obrigatórios:** Nome, CPF, email, telefone, CEP, endereço
- **Quantidade:** Máximo 4 ingressos por evento

## 📱 Responsividade

- **Mobile:** 1 coluna, elementos empilhados
- **Tablet:** 2 colunas, layout adaptativo
- **Desktop:** 3-4 colunas, layout completo
- **Breakpoints:** sm (640px), md (768px), lg (1024px), xl (1280px)

## Performance

- **Lazy loading** de imagens
- **Scroll infinito** para listas grandes
- **Componentes otimizados** com React.memo
- **Hot reload** rápido em desenvolvimento
- **Build otimizado** para produção