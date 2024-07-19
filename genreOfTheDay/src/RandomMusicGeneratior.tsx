import { musicGenres } from "./utils/genres";
import { useState } from "react";

const RandomMusicGenreGenerator: React.FC = () => {
  const [genre, setGenre] = useState<{ name: string; parent?: string } | null>(
    null
  );

  const generateRandomGenre = () => {
    const randomIndex = Math.floor(Math.random() * musicGenres.length);
    setGenre(musicGenres[randomIndex]);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col justify-center items-center text-center h-screen">
      <h1 className="random-genre-title text-4xl font-bold">
        Random <br /> Genre
      </h1>
      <button className="glow-on-hover mt-4" onClick={generateRandomGenre}>
        <span className="generate-text">generate</span>
      </button>
      {genre && (
        <div className="mt-4 text-wrap">
          <h1 className="genre-name">{genre.name}</h1>
          {genre.parent && (
            <p className="parent-genre text-gray-600">
              <span className="text-sm">{genre.parent}</span>
            </p>
          )}
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(
              genre.name + " music"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="google-search text-blue-500 underline mt-4 inline-block"
          >
            search on google
          </a>
        </div>
      )}
    </div>
  );
};

export default RandomMusicGenreGenerator;
