import React from 'react';
import { Badge } from '../../atoms/Badge';
import { Card } from '../../atoms/Card';
import { Text } from '../../atoms/Text';
import { StyledPriceChangeCardLabel, StyledPriceChangeCardBody } from './styled';
import { IPriceChangeCardProps } from './types';

export const PriceChangeCard: React.FC<IPriceChangeCardProps> = ({ label, value, badge }) => {
  return <Card>
    <StyledPriceChangeCardLabel>
      {label}
    </StyledPriceChangeCardLabel>
    <StyledPriceChangeCardBody>
      <Text variant={'h2'} tag="div">{value}</Text>
      {badge && <Badge {...badge} />}
    </StyledPriceChangeCardBody>
  </Card>;
}