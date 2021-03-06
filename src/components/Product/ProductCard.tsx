import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';
import RatingDisplay from 'components/RatingDisplay/RatingDisplay';
import { Button, Heading, Paragraph } from 'components/UI';
import { Product } from 'services/products.types';
import ProductDetails from './ProductDetails';
import { SCardWrapper, SImageWrapper, SBadge, SContentWrapper } from './ProductCard.styles';

const ProductCard = ({ id, name, description, rating, image, promo, active }: Product) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <SCardWrapper>
        <SImageWrapper muted={!active}>
          {promo && <SBadge>Promo</SBadge>}
          <img src={image} alt="" loading="lazy" />
        </SImageWrapper>
        <SContentWrapper>
          <Heading as="h3" isSmall>
            {name}
          </Heading>
          <Paragraph muted>{description}</Paragraph>
          <RatingDisplay rating={rating} />
          <Button onClick={() => setModalIsOpen(true)} disabled={!active}>
            {active ? 'Show details' : 'Unavailable'}
          </Button>
        </SContentWrapper>
      </SCardWrapper>

      {active && (
        <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
          <ProductDetails id={id} name={name} description={description} image={image} />
        </Modal>
      )}
    </>
  );
};

export default React.memo(ProductCard);
