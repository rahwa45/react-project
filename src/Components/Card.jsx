import React from "react";
import PropTypes from "prop-types";
import '../App.css'


const Card = ({ title, image, description }) => {
  return (
    <div className="card">
      <img src={image} className="" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description.length > 50
            ? `${description.substring(0, 30)}...`
            : description}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;