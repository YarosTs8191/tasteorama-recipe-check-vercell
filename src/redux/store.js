import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice';
import recipesReducer from './recipes/slice';
import categoriesReducer from './categories/slice';
import ingredientsReducer from './ingredients/slice';
import filtersReducer from './filters/slice'; // ← додай це
import modal from './modal/slice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    recipes: recipesReducer,
    categories: categoriesReducer,
    ingredients: ingredientsReducer,
    filters: filtersReducer, // ← і це
    modal,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
