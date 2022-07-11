import React from 'react';
import { IBadgeProps } from './types';
import { StyledBadge, StyledBadgeValue } from './styled';
import { Icon } from '../Icon';

export const Badge: React.FC<IBadgeProps> = ({ positive, value }) => {
  return <StyledBadge positive={positive}>
    <StyledBadgeValue>{value}</StyledBadgeValue>
    <Icon name={positive ? 'positive' : 'negative'} size={12} />
  </StyledBadge>;
}