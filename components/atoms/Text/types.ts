import React, { HTMLAttributes } from 'react';
import { color, font } from '../../../theme';

export type TextVariant = keyof typeof font;

export interface ITextProps extends HTMLAttributes<Element> {
  variant?: TextVariant
  color?: keyof typeof color.text
  as?: React.ElementType | keyof JSX.IntrinsicElements
}