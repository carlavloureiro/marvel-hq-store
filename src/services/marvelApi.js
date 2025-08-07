import md5 from 'crypto-js/md5';

const publicKey = '9c8bdd7ff0e3f0d97825a664290a65d3';
const privateKey = 'ba58c9d59bb286ed62f252363be977a0d8106ef4';

export function getMarvelApiUrl(endpoint, params = '') {
  const ts = Date.now().toString();
  const hash = md5(ts + privateKey + publicKey).toString();

  return `https://gateway.marvel.com/v1/public/${endpoint}?ts=${ts}&apikey=${publicKey}&hash=${hash}${params}`;
}
