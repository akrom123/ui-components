import React from 'react';
import { Icon } from '../Icon';
import { StyledCheckbox } from './styled';
import { ICheckboxProps } from './types';

export const Checkbox: React.FC<ICheckboxProps> = ({ checked, disabled }) => {
  let Component = <Icon name={'checkbox'} size={16} />
  if (checked) {
    Component = <Icon name={'checkbox-checked'} size={16} />;
  }
  return <StyledCheckbox disabled={disabled} checked={checked}>{Component}</StyledCheckbox>;
};