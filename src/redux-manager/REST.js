export const fetchMovie = async (payload) => {
  const response =
    await fetch(`http://www.omdbapi.com/?s=${payload}&apikey=470706f1`);
  const data = await response.json();

  return data;
};
export const saveFetch = async (payload) => {
  const response =
    await fetch(`http://www.omdbapi.com/?s=${payload}&apikey=470706f1`);
  const data = await response.json();

  return data;
};
