import CardComponent from "@/components/CardComponent";
import "./globals.css";
import { getAllMoviesService } from "@/services/movie.service";

export default async function Home() {
  // Fetch all movies
  const allMoviesData = await getAllMoviesService();
  console.log("All movies: ", allMoviesData);
  
  // Extract unique genres
  const genresSet = new Set();
  allMoviesData.payload.forEach((movie) => {
    if (movie.genre) {
      genresSet.add(movie.genre);
    }
  });
  const uniqueGenres = [...genresSet];
  console.log(uniqueGenres);

  // Fetch movies for each unique genre
  const genreMoviesData = {};
  for (const genre of uniqueGenres) {
    genreMoviesData[genre] = await getAllMoviesService(genre);
    console.log(`${genre} movies: `, genreMoviesData[genre]);
  }

  return (
    <main>
      <div className="homepage-background h-screen "></div>
      <div className="bg-red-950 h-auto">
        <div className="mr-10 ml-10">
          <p className="capitalize py-3 text-md font-semibold text-white">
            all movie &gt;
          </p>
          <div className="flex gap-3 overflow-y-hidden whitespace-no-wrap scrolling-touch overflow-x-auto scroll-none container">
            {allMoviesData.payload.map((movie) => (
              <CardComponent key={movie.movie_id} movie={movie} />
            ))}
          </div>
        </div>

        {uniqueGenres.map((genre) => (
          <div key={genre} className="mr-10 ml-10">
            {genre && (
              <p className="capitalize py-3 text-md font-semibold text-white">
                {genre} movie &gt;
              </p>
            )}
            <div className="flex gap-3 overflow-y-hidden whitespace-no-wrap scrolling-touch overflow-x-auto scroll-none container">
              {genreMoviesData[genre].payload.map((movie) => (
                <CardComponent key={movie.movie_id} movie={movie} />
              ))}
            </div>
          </div>
        ))}
        <div className="pb-4"></div>
      </div>
    </main>
  );
}
