import { styled } from "../../../theme";
import { IFieldProps } from "./types";

export const StyledField = styled.div`
  display: flex;
  flex-direction: column;
`
export const StyledFieldLabel = styled.label`
  ${({ theme }) => theme.font.body1}
  color: ${({ theme }) => theme.color.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`
export const StyledFieldCaption = styled.span<IFieldProps>`
  ${({ theme }) => theme.font.caption1}
  color: ${({ theme }) => theme.color.text.secondary};
  ${({ hasError, theme }) => hasError ? `
    color: ${theme.color.text.negative};
  ` : ''}
  margin-top: ${({ theme }) => theme.spacing.xxs};
`