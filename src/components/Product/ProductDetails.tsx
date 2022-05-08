import React from 'react';
import { Heading, Paragraph } from 'components/UI';
import { ProductDetails as ProductDetailsProps } from 'services/products.types';
import { SImage, SContent } from './ProductDetails.styles';

const ProductDetails = ({ id, image, name, description }: ProductDetailsProps) => {
  // it might be good place for product request by id (but not in this case)
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
