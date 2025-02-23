import React from "react";
import { MdAccountCircle } from "react-icons/md";
import "./Review.css";

const Reviews = ({ reviews }) => {
  return (
    <div className="mt">
      <h1>Reviews</h1>
      {reviews?.map((comment, id) => (
        <div className="review" key={id}>
          <MdAccountCircle fontSize={35} />
          <div className="review-text">
            <p>{comment.reviewerName}</p>
            <p>{comment.comment}</p>
            <small>{comment.date}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
