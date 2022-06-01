async function getByUrl(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

export { getByUrl };