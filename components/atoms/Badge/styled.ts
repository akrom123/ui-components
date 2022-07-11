import { styled } from "../../../theme";
import { IBadgeProps } from "./types";

export const StyledBadge = styled.div<IBadgeProps>`
font-size: 10px;
line-height: 1.2;
font-weight: ${({ theme }) => theme.fontWeight.bold};
display: inline-flex;
align-items: center;
gap: ${({ theme }) => theme.spacing.xxs};
padding: ${({ theme }) => theme.spacing.xxs};
border-radius: ${({ theme }) => theme.borderRadius.sm};
${({ positive, theme }) => positive ? `
  background-color: ${theme.color.bg.positive};
  color: ${theme.color.text.positive};
` : `
  background-color: ${theme.color.bg.negative};
  color: ${theme.color.text.negative};
  height: 20px;
`}
`

export const StyledBadgeValue = styled.span``