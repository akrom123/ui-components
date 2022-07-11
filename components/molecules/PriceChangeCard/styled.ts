import { styled } from "../../../theme";
import { Text } from "../../atoms/Text";

export const StyledPriceChangeCardLabel = styled.span`
  color: ${({ theme }) => theme.color.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  ${({ theme }) => theme.font.body2}
`

export const StyledPriceChangeCardBody = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`