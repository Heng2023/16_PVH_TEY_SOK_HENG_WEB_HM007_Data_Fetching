"use client";

import React, { useState, useEffect } from "react";
import StarComponent from "./StarComponent";
import { getMovieByIdService } from "@/services/movie.service";

export default function ViewCardComponent({ movieId, data }) {
  console.log("movie details : ", data);
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await getMovieByIdService(movieId);
        setMovieData(response);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, [movieId]);

  const renderStars = (rating) => {
    const filledStars = Math.round(rating); // Round the rating to the nearest integer
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= filledStars) {
        stars.push(<StarComponent key={i} color="yellow" />);
      } else {
        stars.push(<StarComponent key={i} color="grey" />);
      }
    }
    return stars;
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${month} ${day}, ${year}, ${hours}:${minutes}:${seconds} ${ampm}`;
  };

  const imageUrl = data.image ? data.image : "../images/static-image.png";

  return (
    <main className="bg-red-950">
      <div className="flex pt-[5rem] px-[3rem]">
        <div className="mt-10">
          <img
            className="rounded-md h-[28rem] w-[120rem]"
            src={imageUrl}
            alt={data.movie_title}
          ></img>
        </div>
        <div className="ml-8 text-white mt-9 w-[87rem]">
          <p className="text-xl font-semibold capitalize">{data.director}</p>
          <p className="text-xs">{data.runtime} minutes</p>
          <p className="text-xs italic capitalize">{data.genre}</p>

          {/* rating */}
          <div className="flex items-center">{renderStars(data.rating)}</div>

          <div className="mt-8">
            <p className="text-xl font-semibold capitalize">
              {data.movie_title}
              <span className="ml-2 text-xl font-semibold capitalize">{`( ${data.released_year} )`}</span>
            </p>
            <p className="text-sm text-justify">{data.description}</p>
          </div>

          <div className="mt-8">
            <p className="text-xs">{formatTimestamp(data.posted_at)}</p>
          </div>
        </div>
      </div>
      <div className="pb-8"></div>
    </main>
  );
}
