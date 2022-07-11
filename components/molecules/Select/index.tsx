import React from 'react';
import ReactSelect, { CommonProps } from 'react-select';
import { Icon } from '../../atoms/Icon';
import { SelectStyles, StyledNoOptionsMessage } from './styled';
import { ISelectProps } from './types';


export const Select: React.FC<ISelectProps> = ({ hasError, noOptionsMessage = 'Нет значений', ...props }) => {
  return <ReactSelect
    styles={SelectStyles({ hasError })}
    components={{
      IndicatorSeparator: () => null,
      DropdownIndicator: () => <Icon name={'arrow-down'} size={20} />,
      NoOptionsMessage: () => <StyledNoOptionsMessage>{noOptionsMessage}</StyledNoOptionsMessage>,
    }}
    {...props}
  />;
}