import React from 'react';
import { ITextProps } from './types';
import { styled } from '../../../theme';

const DynamicText = ({ tag = 'span', children, ...props }): React.DOMElement<ITextProps, Element> => React.createElement(tag, props, children)

export const StyledText = styled(DynamicText).withConfig({
  shouldForwardProp: (prop, defPropValFN) =>
    !['variant'].includes(prop as string) && defPropValFN(prop),
}) <ITextProps>`
  margin: 0;
  padding: 0;
  color: ${({ theme, color }) => theme.color.text[color!] || 'inherit'};
  ${({ theme, variant = 'body1' }) => theme.font[variant]};
`