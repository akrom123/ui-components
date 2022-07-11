import React from 'react';
import { Header } from '../../organisms/Header';
import { Sidebar } from '../../organisms/Sidebar';
import { Text } from '../../atoms/Text';
import { StyledMainLayout, StyledMainLayoutContent, StyledMainLayoutBody } from './styled';
import { IMainLayoutProps } from './types';

export const MainLayout: React.FC<IMainLayoutProps> = ({ title, children }) => {
  return (
    <StyledMainLayout>
      <Sidebar />
      <StyledMainLayoutContent>
        <Header />
        <StyledMainLayoutBody>
          <Text variant={'h1'}>{title}</Text>
          {children}
        </StyledMainLayoutBody>
      </StyledMainLayoutContent>
    </StyledMainLayout>
  );
}