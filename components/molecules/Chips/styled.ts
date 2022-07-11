import { styled } from '../../../theme';
import { IChipProps } from './types';

export const StyledChips = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxs};
`

export const StyledChip = styled.div.withConfig({
  shouldForwardProp: (prop, defPropValFN) =>
    !['disabled'].includes(prop) && defPropValFN(prop),
}) <IChipProps>`
${({ theme, active, disabled }) => `
    ${theme.font.body1}
    padding: ${theme.spacing.sm} ${theme.spacing.lg};
    cursor: pointer;
    border-radius: ${theme.borderRadius.sm};
    background-color: ${theme.color.bg.secondary};
    color: ${theme.color.text.primary};
    ${disabled ? `
        color: ${theme.color.text.tertiary};
        cursor: not-allowed;
      ` : ''}
    ${active ? `
      background-color: ${theme.color.button.primary};
      color: ${theme.color.text.inverted};
      cursor: default;
      ` : ''}
`}
}
`


