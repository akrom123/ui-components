import React from 'react';
import { Icon } from '../../atoms/Icon';
import { StyledAccordion, StyledAccordionHeader, StyledAccordionArrow, StyledAccordionTitle, StyledAccordionContent } from './styled';
import { IAccordionProps } from './types';

export const Accordion: React.FC<IAccordionProps> = ({ title, open, children, onClick, ...props }) => {
  return <StyledAccordion {...props}>
    <StyledAccordionHeader>
      <StyledAccordionArrow open={open} onClick={onClick}>
        {<Icon name={'arrow-down'} size={24} />}
      </StyledAccordionArrow>
      <StyledAccordionTitle>{title}</StyledAccordionTitle>
    </StyledAccordionHeader>
    {
      open && <StyledAccordionContent>
        {children}
      </StyledAccordionContent>
    }
  </StyledAccordion>;
}