import React from "react";
import PropTypes from "prop-types";

import styles from "./styles";

const Card = ({ image, name, status, species, gender, origin, location }) => (
  <div style={styles.cardContainer}>
    <div>
      <img style={styles.cardImage} src={image} />
      <div style={styles.cardTitleSection}>
      <div>{name}</div>
    </div>
    </div>
    <div style={styles.cardSection}>
      <div style={styles.cardFirstText}>STATUS</div>
      <div style={styles.cardSecondText}>{status}</div>
    </div>
    <div style={styles.cardSection}>
      <div style={styles.cardFirstText}>SPECIES</div>
      <div style={styles.cardSecondText}>{species}</div>
    </div>
    <div style={styles.cardSection}>
      <div style={styles.cardFirstText}>GENDER</div>
      <div style={styles.cardSecondText}>{gender}</div>
    </div>
    <div style={styles.cardSection}>
      <div style={styles.cardFirstText}>ORIGIN</div>
      <div style={styles.cardSecondText}>{origin}</div>
    </div>
    <div style={styles.cardSection}>
      <div style={styles.cardFirstText}>LAST LOCATION</div>
      <div style={styles.cardSecondText}>{location}</div>
    </div>
  </div>
);

Card.propTypes = {
  image: PropTypes.str,
  name: PropTypes.str,
  status: PropTypes.str,
  species: PropTypes.str,
  gender: PropTypes.str,
  origin: PropTypes.str,
  location: PropTypes.str,
};

export default Card;
