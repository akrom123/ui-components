import React from 'react';
import { styled } from "../../../theme";
import { Text } from "../../atoms/Text";
import { IAccordionProps } from './types';

export const StyledAccordion = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.md};
`

export const StyledAccordionHeader = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
`

export const StyledAccordionArrow = styled.div<Pick<IAccordionProps, 'open'>>`
  cursor: pointer;
  color: ${({ theme }) => theme.color.text.primary};
    svg {
      display: block;
      transition: ${({ theme }) => theme.transition.common};
      ${({ open }) => open ? `
      transform: rotate(180deg);
      ` : ''
  }
  }
`

export const StyledAccordionTitle = styled.h3`
  color: ${({ theme }) => theme.color.text.primary};
  ${({ theme }) => theme.font.h3}
`
export const StyledAccordionContent = styled.div`
  padding-top: ${({ theme }) => theme.spacing.md};
`