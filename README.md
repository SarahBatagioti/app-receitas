<img width="1584" height="396" alt="vivasaboresbanner" src="https://github.com/user-attachments/assets/36fab700-a73e-4c2c-a295-8fb48851d2c7" />

# Viva Sabores

Descubra o jeito mais gostoso de planejar, cozinhar e compartilhar! O Viva Sabores é seu assistente culinário completo: personalize seu perfil com preferências e restrições, encontre receitas perfeitas com busca avançada, assista a vídeos passo a passo e acompanhe informações nutricionais em cada prato. Monte cardápios semanais, gere listas de compras automáticas (com substituições sugeridas) e use o modo offline para cozinhar sem complicação. Salve, avalie, comente e compartilhe suas criações — tudo em um só lugar. 🛒📲🥗

# Como rodar o projeto 

## 🧪 Criação do arquivo .env

### Backend (`/backend`)

```bash
PORT=5001
DATABASE_URL=your_neon_db_url
NODE_ENV=development
```

### Mobile App (`/mobile`)

```bash
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

## 🔧 Rodar o backend

```bash
cd backend
npm install
npm run dev
```

## 📱 Rodar o Aplicativo Mobile

```bash
cd mobile
npm install
npx expo start
```

## Requisitos 1° Sprint

| Rank | Requisitos     | Prioridade | User story                                                                 | Estimativa | Sprint |
|:----:|----------------|:----------:|-----------------------------------------------------------------------------|:----------:|:------:|
|  1   | Cadastro de usuários (perfis individuais) | Alta | Como **usuário**, quero **criar meu perfil** para **salvar preferências e acessar minhas receitas**. | 5 pts | 1 |
|  2   | Biblioteca de receitas (preparo, ingredientes, tempo, porções) | Alta | Como **usuário**, quero **ver receitas com modo de preparo, ingredientes, tempo e porções** para **cozinhar sem dúvidas**. | 8 pts | 1 |
|  3   | Visualização com fotos e vídeo | Média | Como **usuário**, quero **ver fotos e vídeo do preparo** para **seguir cada etapa visualmente**. | 5 pts | 1 |
|  4   | Salvar receitas favoritas | Alta | Como **usuário**, quero **favoritar receitas** para **acessar rapidamente as minhas preferidas**. | 3 pts | 1 |
|  5   | Busca de receitas | Alta | Como **usuário**, quero **pesquisar receitas por nome** para **encontrá-las de forma rápida**. | 3 pts | 1 |
|  6   | Filtro por ingrediente | Média | Como **usuário**, quero **filtrar receitas por ingredientes** para **aproveitar o que já tenho em casa**. | 5 pts | 1 |


## Requisitos 2° Sprint

| Rank | Requisitos     | Prioridade | User story                                                                 | Estimativa | Sprint |
|:----:|----------------|:----------:|-----------------------------------------------------------------------------|:----------:|:------:|
|  1   | Preferências alimentares e restrições no perfil | Alta | Como **usuário**, quero **definir preferências (low carb, vegana, sem glúten) e restrições** para **receber receitas adequadas**. | 5 pts | 2 |
|  2   | Espaço colaborativo (avaliações e comentários) | Alta | Como **usuário**, quero **avaliar e comentar receitas** para **ajudar a comunidade com feedbacks**. | 5 pts | 2 |
|  3   | Envio de receitas dos usuários | Média | Como **usuário**, quero **enviar minhas próprias receitas** para **compartilhar criações com outros**. | 8 pts | 2 |
|  4   | Modo offline (acesso a receitas salvas) | Média | Como **usuário**, quero **acessar receitas favoritas offline** para **cozinhar sem internet**. | 8 pts | 2 |
|  5   | Planejamento de refeições (semanal/mensal) | Alta | Como **usuário**, quero **montar cardápios semanais/mensais** para **organizar minhas refeições**. | 8 pts | 2 |
|  6   | Geração automática da lista de compras | Alta | Como **usuário**, quero **gerar lista de compras baseada no plano de refeições** para **economizar tempo**. | 8 pts | 2 |
|  7   | Marcar itens comprados e editar lista | Média | Como **usuário**, quero **marcar itens como comprados e editar a lista** para **personalizá-la**. | 5 pts | 2 |
|  8   | Escalonar receitas (ajuste de porções) | Média | Como **usuário**, quero **ajustar o número de porções** para **dimensionar automaticamente os ingredientes**. | 5 pts | 2 |
|  9   | Informação nutricional detalhada | Alta | Como **usuário**, quero **ver calorias, proteínas, carboidratos e gorduras** para **acompanhar minha alimentação**. | 8 pts | 2 |
| 10   | Busca avançada (tempo, dificuldade, categoria) | Média | Como **usuário**, quero **buscar por tempo, dificuldade e categoria** para **encontrar receitas ideais rapidamente**. | 5 pts | 2 |

## Requisitos 3° Sprint

| Rank | Requisitos     | Prioridade | User story                                                                 | Estimativa | Sprint |
|:----:|----------------|:----------:|-----------------------------------------------------------------------------|:----------:|:------:|
|  1   | Substituição de ingredientes | Alta | Como **usuário**, quero **sugestões de substitutos** quando **faltar um ingrediente ou eu tiver restrição**. | 5 pts | 3 |
|  2   | Vídeos demonstrativos passo a passo | Média | Como **usuário**, quero **vídeos por etapa** para **aprender técnicas e evitar erros**. | 8 pts | 3 |
|  3   | Anotações pessoais por receita | Média | Como **usuário**, quero **fazer anotações nas receitas** para **registrar ajustes e dicas**. | 3 pts | 3 |
|  4   | Notificações inteligentes | Média | Como **usuário**, quero **receber lembretes de preparo e compras** para **não esquecer horários e ingredientes**. | 5 pts | 3 |
|  5   | Compartilhamento de receitas | Baixa | Como **usuário**, quero **compartilhar receitas em redes sociais ou por link** para **enviar às pessoas**. | 3 pts | 3 |
|  6   | Integração com assistentes virtuais | Baixa | Como **usuário**, quero **usar comandos de voz** para **buscar receitas e ouvir instruções durante o preparo**. | 8 pts | 3 |

## Requisitos não funcionais

1. **Interface intuitiva:** design moderno e categorização clara, oferecendo uma experiência agradável e acessível a todos os perfis de usuários.  
2. **Sistema prático:** atende tanto ao público iniciante na cozinha quanto às pessoas que já possuem experiência.  
3. **Atualizações automáticas para corrigir falhas:** melhorar a performance e introduzir novas receitas e funcionalidades periodicamente.  
