import React from 'react';
import { Heading, Paragraph } from 'components/UI';
import { ReactComponent as TaskListIcon } from 'assets/icons/task_list.svg';
import { SProductEmpty, SIconWrapper } from './ProductEmpty.styles';

const ProductEmpty = () => {
  return (
    <SProductEmpty>
      <SIconWrapper>
        <TaskListIcon />
      </SIconWrapper>
      <Heading as="h2" isSmall>
        Ooops... It&apos;s empty here
      </Heading>
      <Paragraph mb="0" muted>
        There are no products on the list
      </Paragraph>
    </SProductEmpty>
  );
};

export default ProductEmpty;
