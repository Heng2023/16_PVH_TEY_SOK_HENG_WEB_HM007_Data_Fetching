import ViewCardComponent from "@/components/ViewCardComponent";
import { getAllMoviesService } from "@/services/movie.service";

export async function generateStaticParams() {
  const movieItem = await getAllMoviesService();
  return movieItem?.payload?.map((data) => ({
    params: { id: data.movie_id.toString() },
  }));
}

// catch all route
async function getMovies(ids) {
  console.log(" Id came prom catch all route params :", ids);

  // Define local variable for store product that return from api as array
  const catchData = [];

  // loop over the dynamic route id
  for (const id of ids) {
    // Calling the API endpoint and passing the ID after the loop
    const res = await fetch(
      `https://movie-api-get-only-bmc3.vercel.app/api/${id}`
    );

    //convert json data into javascript object
    const cardDetails = await res.json();

    // add the JavaScript object that fetched from the API into a local array
    catchData.push(cardDetails);
  }
  return catchData;
}

const CardDetails = async ({ params }) => {
  const { id } = params;
  console.log("id: ", id);

  const cardDetails = await getMovies(id);
  console.log("card details : ", cardDetails);
  return (
    <div>
      {cardDetails?.map((movie) => (
        <ViewCardComponent key={movie.CardDetails?.id} data={movie.payload} />
      ))}
    </div>
  );
};

export default CardDetails;
