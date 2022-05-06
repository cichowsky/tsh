import React from 'react';
import StarIconSRC from 'assets/icons/star.svg';
import StarBorderIconSRC from 'assets/icons/star_border.svg';
import { SRatingDisplay } from './RatingDisplay.styles';

type RatingDisplayProps = {
  rating: number;
  maxRating?: number;
};

const RatingDisplay = ({ rating, maxRating = 5 }: RatingDisplayProps) => {
  const ratingArray = Array.from({ length: maxRating }, (_, i) => i + 1);
  return (
    <SRatingDisplay title={`Rating: ${rating}/${maxRating}`}>
      {ratingArray.map((rate) => {
        if (rate <= rating) {
          return <img key={rate} src={StarIconSRC} alt="" />;
        }
        return <img key={rate} src={StarBorderIconSRC} alt="" />;
      })}
    </SRatingDisplay>
  );
};

export default RatingDisplay;
