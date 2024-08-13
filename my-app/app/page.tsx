import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Rikkei Academy</h1>
      <p>
        <FontAwesomeIcon icon={faHome} /> Home
      </p>
      <p>
        <FontAwesomeIcon icon={faInfoCircle} /> About
      </p>
    </div>
  );
};

export default HomePage;
