import React from 'react'
import { StyledChip, StyledChips } from './styled';
import { IChipsProps } from './types';


export const Chips: React.FC<IChipsProps> = ({ options, value = [], ...props }) => {
  return <StyledChips {...props}>
    {
      options.map((option) => (
        <StyledChip key={option.value} disabled={option.disabled} active={value.includes(option.value)}>{option.label}</StyledChip>
      ))
    }
  </StyledChips>
}