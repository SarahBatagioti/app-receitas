
<img width="1584" height="396" alt="vivasaboresbanner" src="https://github.com/user-attachments/assets/4aef4701-9f2b-426f-be88-b028af341d5e" />

# Viva Sabores

Descubra o jeito mais gostoso de planejar, cozinhar e compartilhar! O Viva Sabores é seu assistente culinário completo: personalize seu perfil com preferências e restrições, encontre receitas perfeitas com busca avançada, assista a vídeos passo a passo e acompanhe informações nutricionais em cada prato. Monte cardápios semanais, gere listas de compras automáticas (com substituições sugeridas) e use o modo offline para cozinhar sem complicação. Salve, avalie, comente e compartilhe suas criações — tudo em um só lugar. 🛒📲🥗

---

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

---

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

---

# Requisitos 

1. **Cadastros de usuários:** criação de perfis individuais com preferências alimentares, restrições nutricionais e objetivos específicos, como preparo rápido, dietas low carb, veganas, ou sem gluten.
2. **Biblioteca de receitas:** instruções detalhadas de preparo, lista de ingredientes, tempo estimado e números de porções
3. **Salvar receitas favoritas:** espaço dedicado dentro do perfil do usuário
4. **Modo offline:** acessar receitas salvas sem a necessidade de conexão à internet
5. **Espaço colaborativo:** é possível avaliar receitas, deixar comentários ou enviar suas próprias criações
6. **Planejamento de refeições:** organizar cardápios semanais ou mensais, distribuindo receitas de acordo com suas necessidades
7. **Geração automática de lista de compras personalizadas:** baseadas nas refeições escolhidas, otimizando tempo e evitando esquecimentos
8. **Marcação de itens já adquiridos e edição manual da lista de compras:** personalização da lista de compras que foi gerada automática
9.  **Escalonar receitas:** ajuste automático da quantidade de ingredientes de acordo com o número de porções desejado
10. **Informações nutricionais detalhadas:** permite o usuário acompanhar o valor nutricional de suas refeições, como quantidades de calorias, proteínas, carboidratos e gorduras
11. **Busca avançada:** permite o usuário localizar receitas de acordo com critérios como ingredientes disponíveis, tempo de preparo, dificuldade ou categoria culinária, como sobremesas, pratos principais ou entradas
12. **Sugestões de substituição de ingredientes:** em casos de indisponibilidades ou restrição alimentar é feita uma sugestão de substituição de ingredientes
13. **Vídeos demonstrativos:** cada etapa do preparo será explicada de forma visual
14. **Espaço de anotações pessoais:** em cada receita é possível registrar observações, alterações e dicas próprias
15. **Notificações inteligentes:** avisos ao usuários sobre o horário de preparo planejado ou lembranças de compras de determinados ingredientes
16. **Compartilhamento de receitas:** compartilhamento em redes sociais ou via link para amigos ou familiares
17. **Integrar-se com assistentes virtuais e dispositivos móveis:** permite o usuário utilizar comando de voz para buscar receitas ou ler instruções durante o preparo

---

## Requisitos 1° Sprint

| Rank | Requisitos     | Prioridade | User story                                                                 | Estimativa | Sprint |
|:-----:|---------------|:----------:|-----------------------------------------------------------------------------|:----------:|:------:|
|  1   |               |            |                                                                             |             |    1    |
|  2   |               |            |                                                                             |            |    1    |
|  3   |               |            |                                                                             |            |    1    |
|  4   |                |            |                                                                             |            |    1    |
|  5   |                |            |                                                                             |            |    1    |
|  6   |                |            |                                                                             |            |    1    |
|  7   |                |            |                                                                             |            |    1    |
|  8   |                |            |                                                                             |            |    1    |
|  9   |                |            |                                                                             |            |    1    |
| 10   |                |            |                                                                             |            |    1    |

---

## Requisitos 2° Sprint

---

## Requisitos 3° Sprint


---

## Requisitos não funcionais

1. **Interface intuitiva:** design moderno e categorização clara, oferecendo uma experiência agradável e acessível a todos os perfis de usuários.  
2. **Sistema prático:** atende tanto ao público iniciante na cozinha quanto às pessoas que já possuem experiência.  
3. **Atualizações automáticas para corrigir falhas:** melhorar a performance e introduzir novas receitas e funcionalidades periodicamente.  
