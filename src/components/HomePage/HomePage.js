import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Header from "../common/Header";
import CardsPage from "../CardsPage";
import { randomCharacter } from "../../utils/dataUtils";
import styles from "./styles";

const HomePage = ({ character, getCharacters }) => {
  useEffect(() => {
    getCharacters(randomCharacter(1, 200));
  }, []);

  return (
    <div>
      <Header />
      {character.length > 0 ? (
        <CardsPage character={character} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

HomePage.propTypes = {
  character: PropTypes.array,
  getCharacters: PropTypes.func,
};

export default HomePage;
