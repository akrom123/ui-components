import { styled } from "../../../theme";
import { ITextFieldProps } from "./types";

export const StyledTextField = styled.input<ITextFieldProps>`
  height: 44px;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.color.border.default};
  background-color: ${({ theme }) => theme.color.bg.secondary};
  color: ${({ theme }) => theme.color.text.primary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.button.primary};
    outline: none;
  }
  &:disabled {
    border-color: transparent;
    color: 1px solid ${({ theme }) => theme.color.text.secondary};
  }
  ${({ hasError, theme }) => hasError ? `
    border-color: ${theme.color.text.negative};
  ` : ''};
  ${({ theme }) => theme.font.body2}
`