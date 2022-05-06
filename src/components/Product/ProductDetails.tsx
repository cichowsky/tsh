import React from 'react';
import { Heading, Paragraph } from 'components/UI';
import { SImage, SContent } from './ProductDetails.styles';
import { ProductDetails as ProductDetailsProps } from './Product.type';

const ProductDetails = ({ id, image, name, description }: ProductDetailsProps) => {
  return (
    <>
      <SImage src={image} alt="" loading="lazy" />
      <SContent>
        <Heading>{name}</Heading>
        <Paragraph isBig muted mb="0">
          {description}
        </Paragraph>
      </SContent>
    </>
  );
};

export default ProductDetails;
