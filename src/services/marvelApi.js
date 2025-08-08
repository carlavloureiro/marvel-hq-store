import md5 from 'md5';

const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY;

export function getMarvelApiUrl(endpoint = 'comics', params = {}) {
  const ts = Date.now().toString();
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

export async function fetchHQs(offset = 0, limit = 20) {
  const url = getMarvelApiUrl('comics', {
    offset,
    limit,
    orderBy: 'title',
    format: 'comic',
    formatType: 'comic',
    noVariants: true,
  });

  const res = await fetch(url);
  const json = await res.json();

  const results = json.data.results.filter(comic =>
    !comic.thumbnail?.path.includes('image_not_available')
  );

  const total = Math.min(json.data.total, 120); 

  return { ...json.data, total, results };
};
