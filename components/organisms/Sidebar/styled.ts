import { styled } from "../../../theme";
import { Link } from "react-router-dom";
import { ReactComponent as LogoPath } from '../../../../assets/images/logo-path.svg'
import { ISidebarItemProps } from "./types";

export const StyledSidebar = styled.div`
  background: ${({ theme }) => theme.color.bg.accent};
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.lg} ${theme.spacing.xl}`};
  height: 100vh;
  width: 200px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`

export const StyledSidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  grid-gap: 28px;
  flex: 1;
`

export const StyledSidebarItem = styled(Link) <ISidebarItemProps>`
  color: ${({ theme }) => theme.color.text.secondary};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.color.text.inverted};
  }
`

export const StyledSidebarItemText = styled.span`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`

export const StyledSidebarLogo = styled(LogoPath)`
  width: 42px;
  fill: ${({ theme }) => theme.color.bg.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};

`