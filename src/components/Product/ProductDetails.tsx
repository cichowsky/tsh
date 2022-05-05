import React from 'react';
import { Heading, Paragraph } from 'components/UI';
import { StyledImage, StyledContent } from './ProductDetails.styles';
import { ProductDetails as ProductDetailsProps } from './Product.type';

const ProductDetails = ({ id, image, name, description }: ProductDetailsProps) => {
  return (
    <>
      <StyledImage src={image} alt="" loading="lazy" />
      <StyledContent>
        <Heading>{name}</Heading>
        <Paragraph isBig muted mb="0">
          {description}
        </Paragraph>
      </StyledContent>
    </>
  );
};

export default ProductDetails;
