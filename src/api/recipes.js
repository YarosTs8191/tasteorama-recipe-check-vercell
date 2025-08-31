export async function fetchRecipes({ page = 1, limit = 12, query, category } = {}) {
  const base = import.meta.env.VITE_API_URL || ''; 
  const url = new URL('/recipes', base);       
  url.searchParams.set('page', page);
  url.searchParams.set('limit', limit);
  if (query) url.searchParams.set('query', query);
  if (category) url.searchParams.set('category', category);

  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to load recipes');
  return res.json();
}
