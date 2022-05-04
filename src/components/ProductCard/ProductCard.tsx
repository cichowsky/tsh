import React from 'react';
import { Button, Heading, Paragraph } from 'components/UI';
import RatingDisplay from 'components/RatingDisplay/RatingDisplay';
import {
  ProductCardList,
  StyledCardWrapper,
  StyledImageWrapper,
  StyledBadge,
  StyledContentWrapper,
} from './ProductCard.styles';

export { ProductCardList };

export type ProductCardProps = {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  promo: boolean;
  active: boolean;
};

const ProductCard = ({ id, name, description, rating, image, promo, active }: ProductCardProps) => {
  return (
    <StyledCardWrapper>
      <StyledImageWrapper muted={!active}>
        {promo && <StyledBadge>Promo</StyledBadge>}
        <img src={image} alt="" loading="lazy" />
      </StyledImageWrapper>
      <StyledContentWrapper>
        <Heading as="h3" isSmall>
          {name}
        </Heading>
        <Paragraph muted>{description}</Paragraph>
        {/* <StyledRating>{rating}</StyledRating> */}
        <RatingDisplay rating={rating} />
        <Button disabled={!active}>{active ? 'Show details' : 'Unavailable'}</Button>
      </StyledContentWrapper>
    </StyledCardWrapper>
  );
};

export default ProductCard;
