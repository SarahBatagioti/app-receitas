import express from 'express';
import { ENV } from './config/env.js';
import { db } from './config/db.js';
import { favoritesTable } from './db/schema.js';
import { eq, and } from 'drizzle-orm';
import { parse } from 'dotenv';

const app = express();
const PORT = ENV.PORT || 3001;

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).send({ success: true });
});

app.post('/api/favorites', async (req, res) => {
  try {
    const { userId, recipeId, title, image, cookTime, servings } = req.body;
    if (!userId || !recipeId || !title) {
      return res.status(400).send({ error: 'Arquivos ausentes' });
    }

    const newFavorite = await db
      .insert(favoritesTable)
      .values({
        userId,
        recipeId,
        title,
        image,
        cookTime,
        servings
      })
      .returning();

    res.status(201).json(newFavorite[0]);

  } catch (error) {
    console.error('Erro ao adicionar favorito:', error);
    res.status(500).json({ error: 'Erro ao adicionar favorito' });
  }
});

app.get('/api/favorites/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    const userFavorites = await db
      .select()
      .from(favoritesTable)
      .where(eq(favoritesTable.userId, userId));

    res.status(200).json(userFavorites);

  } catch (error) {
    console.error('Erro ao buscar favoritos:', error);
    res.status(500).json({ error: 'Erro ao buscar favoritos' });
  }
});

app.delete('/api/favorites/:userId/:recipeId', async (req, res) => {
  try {
    const { userId, recipeId } = req.params;

    await db
      .delete(favoritesTable)
      .where(and(eq(favoritesTable.userId, userId), eq(favoritesTable.recipeId, parseInt(recipeId)))
      );

    res.status(200).json({ message: 'Favorito removido com sucesso' });
  } catch (error) {
    console.error('Erro ao remover favorito:', error);
    res.status(500).json({ error: 'Erro ao remover favorito' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

