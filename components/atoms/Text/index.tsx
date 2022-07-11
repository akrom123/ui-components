import React from 'react'
import { StyledText } from './styled';
import { ITextProps, TextVariant } from './types';

const variantMapping: Record<TextVariant, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body1: 'p',
  body2: 'p',
  caption1: 'span',
  caption2: 'span',
};


export const Text: React.FC<ITextProps> = ({ children, variant = 'body1', as = 'span', ...props }) => {
  return <StyledText
    tag={variantMapping[variant] || as}
    variant={variant}
    {...props}
  >
    {children}
  </StyledText>
}