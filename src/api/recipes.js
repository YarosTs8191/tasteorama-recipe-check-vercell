export async function fetchRecipes({ page = 1, limit = 12, query, category } = {}) {
  const base = import.meta.env.VITE_API_URL || ''; // наприклад: http://localhost:3000/api
  const url = new URL('/api/recipes', base);       // якщо бекенд прокситься — залиш просто '/api/recipes'
  url.searchParams.set('page', page);
  url.searchParams.set('limit', limit);
  if (query) url.searchParams.set('query', query);
  if (category) url.searchParams.set('category', category);

  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to load recipes');
  return res.json();
}
