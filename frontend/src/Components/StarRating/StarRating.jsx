import React, { useState } from 'react';
import './StarRating.css'; // Import CSS for styling

export const StarRating = ({ rating, setRating }) => {
    const [hoverRating, setHoverRating] = useState(0);

    const handleMouseEnter = (value) => {
        setHoverRating(value);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((value) => (
                <span
                    key={value}
                    className={`star ${value <= (hoverRating || rating) ? 'selected' : ''}`}
                    onMouseEnter={() => handleMouseEnter(value)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => setRating(value)}
                >
                   <i className='fa-solid fa-star'></i>
                </span>
            ))}
        </div>
    );
};
