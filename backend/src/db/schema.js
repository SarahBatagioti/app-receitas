import { pgTable, serial, timestamp, text, integer } from 'drizzle-orm/pg-core';

export const favoritesTable = pgTable('favorites', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull(),
  recipeId: integer('recipe_id').notNull(),
  title: text('title').notNull(),
  image: text('image'),
  cookieTime: text('cookie_time'),
  servings: text('servings'),
  createdAt: timestamp('created_at').defaultNow(),
});