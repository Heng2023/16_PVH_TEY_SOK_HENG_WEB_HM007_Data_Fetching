import CardComponent from "@/components/CardComponent";
import "./globals.css";
import {
  getAllMoviesService,
  getMoviesByGenreService,
} from "@/services/movie.service";

export default async function Home() {
  const allMoviesData = await getAllMoviesService();
  console.log("Message: " + allMoviesData);
  const actionMoviesData = await getMoviesByGenreService("Action");
  console.log("Message: " + actionMoviesData);
  const dramaMoviesData = await getMoviesByGenreService("Drama");
  console.log("Message: " + dramaMoviesData);
  const scienceFictionMoviesData = await getMoviesByGenreService(
    "Science Fiction"
  );
  console.log("Message: " + scienceFictionMoviesData);
  const hollywoodMoviesData = await getMoviesByGenreService("Hollywood");
  console.log("Message: " + hollywoodMoviesData);
  const animeMoviesData = await getMoviesByGenreService("Anime");
  console.log("Message: " + animeMoviesData);

  return (
    <main>
      <div className="homepage-background h-screen"></div>
      <div className="bg-red-950 h-[116rem]">
        <div className="h-[10rem] mr-10 ml-10">
          <p className="capitalize py-3 text-md font-semibold text-white">
            all movies &gt;
          </p>

          <div className="flex gap-3 overflow-y-hidden whitespace-no-wrap scrolling-touch overflow-x-auto scroll-none container">
            {allMoviesData.payload.map((movie) => (
              <CardComponent key={movie.movie_id} movie={movie} />
            ))}
          </div>
        </div>

        <div className="h-[10rem] mr-10 ml-10 mt-[9.1rem]">
          <p className="capitalize py-3 text-md font-semibold text-white">
            Action movie &gt;
          </p>

          <div className="flex gap-3 overflow-y-hidden whitespace-no-wrap scrolling-touch overflow-x-auto scroll-none container">
            {actionMoviesData.payload.map((movie) => (
              <CardComponent key={movie.movie_id} movie={movie} />
            ))}
          </div>
        </div>

        <div className="h-[10rem] mr-10 ml-10 mt-[9.1rem]">
          <p className="capitalize py-3 text-md font-semibold text-white">
            drama movie &gt;
          </p>

          <div className="flex gap-3 overflow-y-hidden whitespace-no-wrap scrolling-touch overflow-x-auto scroll-none container">
            {dramaMoviesData.payload.map((movie) => (
              <CardComponent key={movie.movie_id} movie={movie} />
            ))}
          </div>
        </div>

        <div className="h-[10rem] mr-10 ml-10 mt-[9.1rem]">
          <p className="capitalize py-3 text-md font-semibold text-white">
            science fiction movie &gt;
          </p>

          <div className="flex gap-3 overflow-y-hidden whitespace-no-wrap scrolling-touch overflow-x-auto scroll-none container">
            {scienceFictionMoviesData.payload.map((movie) => (
              <CardComponent key={movie.movie_id} movie={movie} />
            ))}
          </div>
        </div>

        <div className="h-[10rem] mr-10 ml-10 mt-[9.1rem]">
          <p className="capitalize py-3 text-md font-semibold text-white">
            Hollywood movie &gt;
          </p>

          <div className="flex gap-3 overflow-y-hidden whitespace-no-wrap scrolling-touch overflow-x-auto scroll-none container">
            {hollywoodMoviesData.payload.map((movie) => (
              <CardComponent key={movie.movie_id} movie={movie} />
            ))}
          </div>
        </div>

        <div className="h-[10rem] mr-10 ml-10 mt-[9.1rem]">
          <p className="capitalize py-3 text-md font-semibold text-white">
            anima movie &gt;
          </p>

          <div className="flex gap-3 overflow-y-hidden whitespace-no-wrap scrolling-touch overflow-x-auto scroll-none container">
            {animeMoviesData.payload.map((movie) => (
              <CardComponent key={movie.movie_id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
