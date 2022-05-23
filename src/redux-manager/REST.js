export const fetchMovie = async (payload) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${payload}&apikey=470706f1`
  );
  const data = await response.json();

  return data;
};

export const saveFetch = async (bodyData) => {
  const response = await fetch(
    "https://acb-api.algoritmika.org/api/movies/list",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bodyData),
    }
  );
  const data = await response.json();

  return data;
};

export const takeFetch = async (bodyData) => {
  const response = await fetch(
    "https://acb-api.algoritmika.org/api/movies/list/",
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bodyData),
    }
  );
  const data = await response.json();

  return data;
};