import React from "react";
import { useQuery } from "@apollo/client";
import { FilmCard } from "../FilmCard";
import { AllFilmsQuery } from "../../../../routes/MSWTemplates/apiAlternatives/apollo";

function useFetchFilms() {
  const { loading, error, data } = useQuery(AllFilmsQuery);

  const films = data ? data.allFilms.films : [];

  return { loading, error, films };
}

export function App() {
  const { loading, error, films } = useFetchFilms();

  if (loading) {
    return <p>Fetching Star Wars data...</p>;
  }

  if (error) {
    return <p>Could not fetch Star Wars data</p>;
  }

  return (
    <div className="films-grid">
      {films.map((film) => (
        <FilmCard key={film.episode_id} film={film} />
      ))}
    </div>
  );
}
