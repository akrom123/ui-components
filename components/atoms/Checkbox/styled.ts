import { styled } from "../../../theme";
import { ICheckboxProps } from "./types";

export const StyledCheckbox = styled.div<ICheckboxProps>`
  cursor: pointer;
  ${({ checked, theme, disabled }) => !checked && !disabled ? `color: ${theme.color.border.default}` : ''};
  ${({ checked, disabled }) => !checked && disabled ? `color: #EDEFF3` : ''};
  ${({ checked, theme }) => checked ? `color: ${theme.color.button.primary}` : ''};
  ${({ checked, disabled }) => checked && disabled ? `color: #b9b9b9` : ''};
  ${({ disabled }) => disabled ? `cursor: not-allowed` : ''};
  &:hover {
    ${({ checked, theme, disabled }) => checked && !disabled ? `color: ${theme.color.button.hover}` : ''};
    ${({ checked, theme, disabled }) => !checked && !disabled ? `color: ${theme.color.border.hover}` : ''};
  }
`