import { styled } from "../../../theme";

export const StyledTippy = styled.div`
  background-color: ${({ theme }) => theme.color.bg.tertiary};
  color: ${({ theme }) => theme.color.text.inverted};
  ${({ theme }) => theme.font.body2}
`

export const StyledTooltipWrap = styled.span`
  color: ${({ theme }) => theme.color.graphics.tertiary};
  svg {
    display: block;
  }
`