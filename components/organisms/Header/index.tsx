import React from 'react';
import { Icon } from '../../atoms/Icon';
import { StyledHeader, StyledHeaderNav, StyledHeaderNavItem, StyledHeaderNavItemText, StyledHeaderText } from './styled';

export const Header = () => {
  return <StyledHeader>
    <StyledHeaderText>
      Данные обновлены на {new Date().toLocaleString()}
    </StyledHeaderText>
    <StyledHeaderNav>
      <StyledHeaderNavItem to="/">
        <Icon name="bell" size={24} />
      </StyledHeaderNavItem>
      <StyledHeaderNavItem to="/">
        <Icon name="menu-user" size={24} />
        <StyledHeaderNavItemText>Александров Александр</StyledHeaderNavItemText>
      </StyledHeaderNavItem>
      <StyledHeaderNavItem to="/">
        <Icon name="menu-reports" size={24} />
        <StyledHeaderNavItemText>Регион</StyledHeaderNavItemText>
      </StyledHeaderNavItem>
    </StyledHeaderNav>
  </StyledHeader>;
};