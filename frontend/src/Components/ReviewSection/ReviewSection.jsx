import React, { useState } from 'react';
import { StarRating } from '../StarRating/StarRating';
import './ReviewSection.css';

export const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (reviewText && rating) {
            const newReview = {reviewText, rating };
            setReviews([...reviews, newReview]);
            setReviewText('');
            setRating(0);
        }
    };

    return (
        <div className="review-section">
            <div className="review-section-title">
                <h1>Reviews</h1>
                <div className="product-display-rating">
                <i className='fa-solid fa-star full'></i> 
                <i className='fa-solid fa-star full'></i> 
                <i className='fa-solid fa-star full'></i> 
                <i className='fa-solid fa-star full'></i> 
                <i className='fa-solid fa-star empty'></i> 
                <p>(130)</p>
                </div>
            </div>
            <form className="review-form" onSubmit={handleSubmit}>
                              
                <StarRating rating={rating} setRating={setRating} />
                <div className="name-review-submit">
                    <input
                        className='review-input'
                        type='text'
                        placeholder="Leave a Review"
                        rows="4"
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        required
                    />
                    <button type="submit"><i className='fa-solid fa-paper-plane'></i></button>
                </div>
            </form>

            <div className="reviews">
                <h3>Existing Reviews</h3>
                {reviews.length === 0 ? (
                    <p>No reviews yet.</p>
                ) : (
                    reviews.map((review, index) => (
                        <div key={index} className="review">
                            <div className="review-name-rating">
                            <h4>user</h4>
                                <p>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
                            </div>
                            <p>{review.reviewText}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
