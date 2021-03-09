import React from "react";

import styles from "./styles";

const Header = ({}) => {
  return (
    <div style={styles.headerContainer}>
      <div style={styles.headerContent}>
        <div style={styles.headerTitle}>RICK AND MORTY</div>
        <div style={styles.headerSubTitle}>HEY DID YOU EVER WANT TO HOLD A TERRY FOLD</div>
      </div>
    </div>
  );
};

export default Header;
