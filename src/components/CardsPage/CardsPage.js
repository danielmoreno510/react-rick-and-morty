import React from "react";
import PropTypes from "prop-types";

import Card from "../common/Card";
import styles from "./styles";

const CardsPage = ({character}) => {

  return (
    <div style={styles.cardsContainer}>
      <div style={styles.cardsContent}>
        {character.map(({image, name, status, species, gender, origin, location}) => (
          <Card
            key={name}
            image={image}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            location={location.name}
          />
        ))}
      </div>
    </div>
  );
};

CardsPage.propTypes = {
  character: PropTypes.array,
};

export default CardsPage;
