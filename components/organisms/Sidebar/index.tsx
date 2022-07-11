import React from 'react';
import { Icon } from '../../atoms/Icon';
import { StyledSidebar, StyledSidebarItem, StyledSidebarItemText, StyledSidebarLogo, StyledSidebarNav } from './styled';

export const Sidebar = () => {
  return <StyledSidebar>
    <StyledSidebarLogo />
    <StyledSidebarNav>
      <StyledSidebarItem to="/">
        <Icon name="menu-portfolio" size={24} />
        <StyledSidebarItemText>Портфель</StyledSidebarItemText>
      </StyledSidebarItem>
      <StyledSidebarItem to="/">
        <Icon name="menu-transfers" size={24} />
        <StyledSidebarItemText>Поручения</StyledSidebarItemText>
      </StyledSidebarItem>
      <StyledSidebarItem to="/">
        <Icon name="menu-trade" size={24} />
        <StyledSidebarItemText>Торговля</StyledSidebarItemText>
      </StyledSidebarItem>
      <StyledSidebarItem to="/">
        <Icon name="menu-scan" size={24} />
        <StyledSidebarItemText>Сканер</StyledSidebarItemText>
      </StyledSidebarItem>
      <StyledSidebarItem to="/">
        <Icon name="menu-documents" size={24} />
        <StyledSidebarItemText>Документы</StyledSidebarItemText>
      </StyledSidebarItem>
      <StyledSidebarItem to="/">
        <Icon name="menu-feedback" size={24} />
        <StyledSidebarItemText>Обращения</StyledSidebarItemText>
      </StyledSidebarItem>
      <StyledSidebarItem to="/">
        <Icon name="menu-contacts" size={24} />
        <StyledSidebarItemText>Контакты</StyledSidebarItemText>
      </StyledSidebarItem>
    </StyledSidebarNav>
    <StyledSidebarItem to="/">
      <Icon name="menu-logout" size={24} />
      <StyledSidebarItemText>Выход</StyledSidebarItemText>
    </StyledSidebarItem>
  </StyledSidebar>;
};