import { borderRadius, color, spacing, styled, font } from '../../../theme';

export const SelectStyles = ({ hasError }) => ({
  control: (provided, state) => ({
    ...provided,
    height: '44px',
    borderColor: state.isFocused ? color.button.primary : color.border.default,
    boxShadow: 'none',
    backgroundColor: color.bg.secondary,
    borderRadius: borderRadius.sm,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    return {
      ...provided,
      opacity,
      transition,
      padding: '12px',
      fontSize: '14px',
      lineHeight: '20px',
      margin: 0,
    };
  },
  indicatorsContainer: (provided) => ({
    ...provided,
    padding: '12px',
    color: color.graphics.tertiary,
  }),
  input: (provided) => ({
    ...provided,
    color: color.text.primary,
    fontSize: '14px',
    lineHeight: '20px',
    padding: '0 12px',
    margin: 0,
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: '14px',
    lineHeight: '20px',
    padding: '0 12px',
    margin: 0,
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    color: color.text.primary,
    padding: 0,
  }),
  menu: (provided, state) => {
    return {
      ...provided,
      borderColor: color.border.default,
      borderRadius: borderRadius.sm,
      backgroundColor: color.bg.secondary,
      padding: 0
    };
  },
  menuList: (provided, state) => {
    return {
      ...provided,
      padding: spacing.xxs,
    };
  },
  option: (provided, state) => {
    return {
      ...provided,
      margin: 0,
      color: color.text.primary,
      fontSize: '14px',
      lineHeight: '20px',
      padding: '14px 12px',
      borderRadius: borderRadius.sm,
      backgroundColor: state.isSelected ? color.bg.primary : 'transparent',
      ':hover': {
        backgroundColor: color.bg.primary,
      },
    };
  },
})

export const StyledNoOptionsMessage = styled.div`
  padding: 14px;
  color: ${color.text.secondary};
  ${font.caption1}
`