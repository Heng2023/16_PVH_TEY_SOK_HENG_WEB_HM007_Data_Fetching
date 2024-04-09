"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

const TruncatedParagraph = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TruncatedMovieTitle = styled.h5`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CardComponent = ({ movie }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  useEffect(() => {
    const textElement = document.getElementById("cardText");
    if (textElement.scrollHeight > textElement.clientHeight) {
      setIsTruncated(false);
    }
  }, []);

  const {
    movie_id = "",
    movie_title = "",
    description = "",
    image = "",
  } = movie || {};

  return (
    <main>
      <Link href={`/detail/${movie_id}`}>
        <div className="bg-white w-[17rem] px-3 py-3 mt-1 rounded-md">
          <img className="rounded-sm" src={image} alt={movie_title} />
          <TruncatedMovieTitle className="mt-3 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {movie_title}
          </TruncatedMovieTitle>
          <TruncatedParagraph className="text-sm mt-2" id="cardText">
            {description}
          </TruncatedParagraph>
        </div>
      </Link>
    </main>
  );
};

export default CardComponent;
