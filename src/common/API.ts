export async function fetchBooks<T>(titleQuery: string, limit: number) {
  const res = await fetch(`http://openlibrary.org/search.json?title=${titleQuery}&limit=${limit}`);
  return await res.json() as T;
}

export const getCoverUrl = (id: number, size: 'S' | 'M' | 'L') => `http://covers.openlibrary.org/b/id/${id}-${size}.jpg`;
