import { styled } from "../../../theme";
import { Link } from "react-router-dom";
import { ISidebarItemProps } from "./types";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 30px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.bg.secondary};
`

export const StyledHeaderNav = styled.nav`
  display: flex;
  grid-gap: ${({ theme }) => theme.spacing.xl};
`

export const StyledHeaderText = styled.span`
  color: ${({ theme }) => theme.color.text.secondary};
  ${({ theme }) => theme.font.body2}
`

export const StyledHeaderNavItem = styled(Link) <ISidebarItemProps>`
display: flex;
align-items: center;
text-decoration: none;
gap: ${({ theme }) => theme.spacing.sm};
color: ${({ theme }) => theme.color.text.primary};
${({ theme }) => theme.font.body2}}
`

export const StyledHeaderNavItemText = styled.span`
`
