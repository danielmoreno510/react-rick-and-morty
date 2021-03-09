import { orderBy } from "lodash"

export const randomCharacter = (min, max) => {
  const characters = [];
  for (let i = 0; i < 20; i++) {
    characters.push(Math.round(Math.random() * (max - min) + min));
  }

  return characters;
};

export const orderCharacter = (character) => {
  character.map((char) => {
    let episodeMax = 0;
    char.episode.map((currectEpisode) => {
      let episode = currectEpisode.split("/");
      episode = episode[episode.length - 1]
      episode > episodeMax && (char.episodeMax = episode)
    });
  });
  
  return orderBy(character, ["episodeMax"], ['desc', 'asc'])
};
