import { styled } from "../../../theme";

export const StyledCard = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.color.border.default};
  padding: ${({ theme }) => theme.spacing.md};
`