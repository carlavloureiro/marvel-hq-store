import md5 from 'md5';

const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY;

export function getMarvelApiUrl(endpoint = 'comics', params = {}) {
  const ts = Date.now().toString();
  // Gera o md5 que é necessário para autenticação da API da Marvel, utilizei a biblioteca 'md5'
  const hash = md5(ts + privateKey + publicKey);
  const baseUrl = `https://gateway.marvel.com/v1/public/${endpoint}`;
  
  const query = new URLSearchParams({
    ts,
    apikey: publicKey,
    hash,
    ...params,
  });

  return `${baseUrl}?${query.toString()}`;
}

// Marvel API ou API própria com offset e limit
export async function fetchHQs(offset = 0, limit = 20) {
  const url = getMarvelApiUrl('comics', {
    offset,
    limit,
    orderBy: 'title',
  });

  const res = await fetch(url);
  const json = await res.json();
  return json.data; // retorna só a parte útil
}
