import React from 'react';
import { Heading, Paragraph } from 'components/UI';
import { ReactComponent as TaskListIcon } from 'assets/icons/task_list.svg';
import { StyledProductEmpty, StyledIconWrapper } from './ProductEmpty.styles';

const ProductEmpty = () => {
  return (
    <StyledProductEmpty>
      <StyledIconWrapper>
        <TaskListIcon />
      </StyledIconWrapper>
      <Heading as="h2" isSmall>
        Ooops... It&apos;s empty here
      </Heading>
      <Paragraph mb="0" muted>
        There are no products on the list
      </Paragraph>
    </StyledProductEmpty>
  );
};

export default ProductEmpty;
