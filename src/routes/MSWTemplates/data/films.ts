export const films = [
  {
    title: "(Mocked) A New Hope",
    episode_id: 4,
    opening_crawl: `(Mocked) Rebel spaceships have won their first victory against the evil Galactic Empire.`,
    url: "https://swapi.dev/api/films/1/",
    release_date: "1977-05-25"
  },
  {
    title: "(Mocked) Empire Strikes Back",
    episode_id: 5,
    opening_crawl: `(Mocked) Imperial troops are pursuing the Rebel forces across the galaxy.`,
    url: "https://swapi.dev/api/films/2/",
    release_date: "1980-05-17"
  },
  {
    title: "(Mocked) Return of the Jedi",
    episode_id: 6,
    opening_crawl: `(Mocked) Luke Skywalker has returned to his home planet of Tatooine to rescue Han Solo.`,
    url: "https://swapi.dev/api/films/3/",
    release_date: "1983-05-25"
  },
];

export const filmOne = {
  title: "(Mocked) A New Hope",
  episode_id: 4,
  opening_crawl: `Rebel spaceships have won their first victory against the evil Galactic Empire.`,
  url: "https://swapi.dev/api/films/1/",
  release_date: "1977-05-25",
  characters: [
    "http://swapi.dev/api/people/1/",
    "http://swapi.dev/api/people/2/",
  ],
};

export const filmTwo = {
  title: "(Mocked) Empire Strikes Back",
  episode_id: 5,
  opening_crawl: `Imperial troops are pursuing the Rebel forces across the galaxy.`,
  url: "https://swapi.dev/api/films/2/",
  release_date: "1980-05-17",
  characters: ["http://swapi.dev/api/people/1/"],
};
