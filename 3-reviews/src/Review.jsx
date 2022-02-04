import { useState } from "react";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaGithubSquare,
  FaQuoteRight,
} from "react-icons/fa";
import reviews from "./data";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];
  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };
  const handleNext = () => {
    setIndex((prev) => {
      return checkNumber(prev + 1);
    });
  };
  const handlePrev = () => {
    setIndex((prev) => {
      return checkNumber(prev - 1);
    });
  };
  const handleRandom = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length - 1) + 1;
    if (randomNumber === index) {
      randomNumber += 1;
    }
    setIndex((prev) => {
      return checkNumber(randomNumber);
    });
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={handlePrev} className="prev-btn">
          <FaChevronCircleLeft />
        </button>
        <button onClick={handleNext} className="next-btn">
          <FaChevronCircleRight />
        </button>
      </div>
      <button onClick={handleRandom} className="random-btn">
        surprise me
      </button>
    </article>
  );
};

export default Review;
