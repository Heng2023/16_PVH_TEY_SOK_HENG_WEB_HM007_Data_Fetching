export const getAllMoviesService = async (genre = null) => {
  const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api`, {
    cache: "no-store",
  });
  const data = await res.json();

  if (genre) {
    data.payload = data.payload.filter(
      (movie) => movie.genre.toLowerCase() === genre.toLowerCase()
    );
  }

  return data;
};

export const getMovieByIdService = async (id) => {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api/${id}`
  );
  const data = await res.json();
  return data;
};

export const getMoviesByGenreService = async (genre) => {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api?genre=${genre}`
  );
  const data = await res.json();
  return data;
};
