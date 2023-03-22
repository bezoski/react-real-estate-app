import React, { useState } from "react";
//import icon
import { FaStar } from "react-icons/fa";
//import styles
import "./StarRating.css";
const StarRating = () => {
  const StarCount = 5;
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [comment, setComment] = useState("");

  const handleRatingClick = (value) => {
    setRating(value);
  };
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Rating: ${rating}, Comment: ${comment}`);
    setComment("");
    setRating(null);
  };
  return (
    <section className="star_rating fade-bottom">
      <h1>Rating</h1>
      <p>Give us a rating</p>
      <div className="rating">
        <div className="stars">
          {[...Array(StarCount)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <FaStar
                  className={
                    ratingValue <= (hover || rating) ? "star-hover" : "star"
                  }
                  onClick={() => handleRatingClick(ratingValue)}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
        <br />
        <textarea
          placeholder="Write your review..."
          value={comment}
          onChange={handleCommentChange}
        />
        <br />
        <button className="btn" onClick={handleSubmit}>
          Send
        </button>
      </div>
    </section>
  );
};

export default StarRating;
